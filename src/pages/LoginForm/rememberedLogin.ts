const STORAGE_KEY = 'bp-kit:remembered-login';

export interface RememberedLogin {
  email: string;
  firstName: string;
}

export function loadRememberedLogin(): RememberedLogin | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<RememberedLogin>;
    return parsed.email ? { email: parsed.email, firstName: parsed.firstName ?? '' } : null;
  } catch {
    return null;
  }
}

export function saveRememberedLogin(login: RememberedLogin | null): void {
  try {
    if (login) localStorage.setItem(STORAGE_KEY, JSON.stringify(login));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    return;
  }
}

export function firstNameOf(name: string | undefined): string {
  return name?.trim().split(/\s+/)[0] ?? '';
}
