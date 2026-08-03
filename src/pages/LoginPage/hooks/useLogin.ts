// React
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import { useAuthCtx } from '../../../hooks/useAuth';
import { LoginFormValues } from '../validators';

export function useLogin(resolveRoute: (role: string) => string) {
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login, user } = useAuthCtx();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(resolveRoute(user.role), { replace: true });
    }
  }, [user, navigate, resolveRoute]);

  const handleLogin = async (data: LoginFormValues) => {
    setSubmitting(true);
    setError('');
    const err = await login(data.email, data.password);
    if (err) {
      setError(err);
      setSubmitting(false);
    }
    // if successful, the onAuthStateChange listener will update user and navigate away
  };

  return { error, submitting, handleLogin };
}
