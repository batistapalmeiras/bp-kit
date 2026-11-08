// React
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { useAuthCtx } from '../../../hooks/useAuth';
import { firstNameOf, saveRememberedLogin } from '../rememberedLogin';
import { LoginFormValues } from '../validators';

export function useLogin(resolveRoute: (role: string) => string) {
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login, user } = useAuthCtx();
  const navigate = useNavigate();
  const pending = useRef<{ email: string; remember: boolean } | null>(null);

  useEffect(() => {
    if (!user) return;
    if (pending.current) {
      const { email, remember } = pending.current;
      saveRememberedLogin(remember ? { email, firstName: firstNameOf(user.name) } : null);
      pending.current = null;
    }
    navigate(resolveRoute(user.role), { replace: true });
  }, [user, navigate, resolveRoute]);

  const handleLogin = async (data: LoginFormValues, remember: boolean) => {
    setSubmitting(true);
    setError('');
    pending.current = { email: data.email, remember };
    const err = await login(data.email, data.password);
    if (err) {
      pending.current = null;
      setError(err);
      setSubmitting(false);
    }
  };

  return { error, submitting, handleLogin };
}
