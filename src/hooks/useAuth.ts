// React
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
// Libs
import type { SupabaseClient } from '@supabase/supabase-js';
// Components
import { AuthContext, AuthContextValue } from '../contexts/AuthContext';
import { User } from '../types';

export async function fetchProfile(client: SupabaseClient, userId: string): Promise<User | null> {
  try {
    const { data, error } = await client
      .from('profiles')
      .select('id, name, role')
      .eq('id', userId);

    if (error) {
      console.error('Erro ao buscar perfil:', error);
      return null;
    }

    if (!data || data.length === 0) return null;
    return { id: data[0].id, name: data[0].name, role: data[0].role };
  } catch (err) {
    console.error('Exceção ao buscar perfil:', err);
    return null;
  }
}

interface SessionUser {
  id: string;
  email: string;
}

export function useAuth(client: SupabaseClient): AuthContextValue {
  const [user, setUser] = useState<User | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // undefined = sessão ainda não resolvida; null = sem sessão
  const [sessionUser, setSessionUser] = useState<SessionUser | null | undefined>(undefined);

  useEffect(() => {
    // O callback de onAuthStateChange roda segurando o lock interno de auth do
    // supabase-js: qualquer `await` em outra chamada da lib aqui dentro (ex.
    // fetchProfile → getSession) causa deadlock. Só registra a sessão em estado;
    // o perfil é buscado no efeito abaixo, fora do lock.
    const { data: listener } = client.auth.onAuthStateChange((_event, session) => {
      setSessionUser((prev) => {
        const next = session?.user
          ? { id: session.user.id, email: session.user.email ?? '' }
          : null;
        if (prev && next && prev.id === next.id && prev.email === next.email) return prev;
        return next;
      });
    });

    const refreshInterval = setInterval(async () => {
      const { error: refreshError } = await client.auth.refreshSession();
      if (refreshError) {
        setError('Sua sessão expirou. Entre novamente.');
        setUser(null);
        setUserEmail('');
      }
    }, 15 * 60 * 1000);

    const handleVisibilityChange = async () => {
      if (!document.hidden) {
        const { error: refreshError } = await client.auth.refreshSession();
        if (refreshError) {
          setError('Sua sessão expirou. Entre novamente.');
          setUser(null);
          setUserEmail('');
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(refreshInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      listener?.subscription.unsubscribe();
    };
  }, [client]);

  useEffect(() => {
    if (sessionUser === undefined) return;

    if (!sessionUser) {
      setUser(null);
      setUserEmail('');
      setLoading(false);
      return;
    }

    let cancelled = false;
    fetchProfile(client, sessionUser.id).then((profile) => {
      if (cancelled) return;
      if (profile) {
        setUser(profile);
        setUserEmail(sessionUser.email);
        setError(null);
      } else {
        setUser(null);
        setUserEmail('');
        setError('Perfil do usuário não encontrado.');
      }
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [client, sessionUser]);

  const login = useCallback(async (email: string, password: string): Promise<string | null> => {
    setError(null);
    const { error: signInError } = await client.auth.signInWithPassword({ email, password });
    if (signInError) {
      const errorMsg = 'E-mail ou senha incorretos.';
      setError(errorMsg);
      return errorMsg;
    }
    return null;
  }, [client]);

  const logout = useCallback(async () => {
    await client.auth.signOut();
    setUser(null);
    setUserEmail('');
  }, [client]);

  const updateProfile = useCallback(async (name: string, email: string): Promise<string | null> => {
    const { data: { user: authUser } } = await client.auth.getUser();
    if (!authUser) return 'Usuário não autenticado.';

    const { error: profileError } = await client
      .from('profiles')
      .update({ name: name.trim() })
      .eq('id', authUser.id);
    if (profileError) return 'Erro ao atualizar nome.';

    if (email !== userEmail) {
      const { error: emailError } = await client.auth.updateUser({ email });
      if (emailError) return 'Erro ao atualizar e-mail.';
    }

    setUser((u) => u ? { ...u, name: name.trim() } : u);
    return null;
  }, [client, userEmail]);

  return useMemo(
    () => ({ user, userEmail, loading, error, login, logout, updateProfile }),
    [user, userEmail, loading, error, login, logout, updateProfile],
  );
}

export function useAuthCtx() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
