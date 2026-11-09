// Libs
import type { SupabaseClient } from '@supabase/supabase-js';

export interface User {
  id: string;
  name: string;
  /** Raw value from `profiles.role` — each app defines its own role set and interprets this string. */
  role: string;
}

export interface ProfileSource {
  load: (client: SupabaseClient, userId: string) => Promise<User | null>;
  updateIdentity: (client: SupabaseClient, name: string, email: string, currentEmail: string) => Promise<string | null>;
}
