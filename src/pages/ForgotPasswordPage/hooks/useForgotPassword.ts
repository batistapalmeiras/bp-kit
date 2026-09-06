// React
import { useState } from 'react';
// Components
import { useAuthCtx } from '../../../hooks/useAuth';
// Local
import { ForgotPasswordFormValues } from '../validators';

export function useForgotPassword(resetPasswordPath: string) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const { requestPasswordReset } = useAuthCtx();

  const handleSubmit = async (data: ForgotPasswordFormValues) => {
    setSubmitting(true);
    setError('');
    const redirectTo = `${window.location.origin}${resetPasswordPath}`;
    const err = await requestPasswordReset(data.email, redirectTo);
    setSubmitting(false);
    if (err) {
      setError(err);
      return;
    }
    setSent(true);
  };

  return { submitting, sent, error, handleSubmit };
}
