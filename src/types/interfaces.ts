export interface User {
  id: string;
  name: string;
  /** Raw value from `profiles.role` — each app defines its own role set and interprets this string. */
  role: string;
}
