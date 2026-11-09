// React
import { createContext, ReactNode } from 'react';
// Libs
import type { SupabaseClient } from '@supabase/supabase-js';
// Components
import { useAuth } from '../hooks/useAuth';
import { ProfileSource, User } from '../types';

export interface AuthContextValue {
  user: User | null;
  userEmail: string;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  updateProfile: (name: string, email: string) => Promise<string | null>;
  updatePassword: (newPassword: string) => Promise<string | null>;
  requestPasswordReset: (email: string, redirectTo: string) => Promise<string | null>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  client: SupabaseClient;
  profileSource?: ProfileSource;
  children: ReactNode;
}

export function AuthProvider({ client, profileSource, children }: AuthProviderProps) {
  const authValue = useAuth(client, profileSource);
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
