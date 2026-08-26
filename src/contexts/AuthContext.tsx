// React
import { createContext, ReactNode } from 'react';
// Libs
import type { SupabaseClient } from '@supabase/supabase-js';
// Components
import { useAuth } from '../hooks/useAuth';
import { User } from '../types';

export interface AuthContextValue {
  user: User | null;
  userEmail: string;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  updateProfile: (name: string, email: string) => Promise<string | null>;
  updatePassword: (newPassword: string) => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ client, children }: { client: SupabaseClient; children: ReactNode }) {
  const authValue = useAuth(client);
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
