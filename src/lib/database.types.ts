// Placeholder — regenerate from the real project once it exists:
//   supabase gen types typescript --project-id <id> > src/lib/database.types.ts
//
// `profiles` is typed already because useAuth.ts queries it directly
// (id, name, role) to resolve the logged-in user after login. `role` stays
// a plain string here — each consuming app defines its own role values.
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          role: string;
        };
        Insert: {
          id: string;
          name: string;
          role: string;
        };
        Update: {
          id?: string;
          name?: string;
          role?: string;
        };
      };
    };
  };
}
