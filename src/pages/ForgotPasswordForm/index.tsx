// React
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Libs
import { ArrowLeft, Send } from 'lucide-react';
// Components
import { TextInput } from '../../components/Inputs/TextInput';
// Local
import { useForgotPassword } from './hooks';
import {
  BackLink,
  ErrorMsg,
  Form,
  FormHeader,
  FormSubtitle,
  FormTitle,
  SubmitButton,
  SuccessMsg,
} from '../LoginForm/styles';
import { ForgotPasswordFormValues, forgotPasswordSchema } from './validators';

export interface ForgotPasswordFormProps {
  loginPath: string;
  resetPasswordPath: string;
}

export function ForgotPasswordForm({ loginPath, resetPasswordPath }: ForgotPasswordFormProps) {
  const { submitting, sent, error, handleSubmit: submit } = useForgotPassword(resetPasswordPath);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  return (
    <>
      <BackLink type="button" onClick={() => navigate(loginPath)}>
        <ArrowLeft size={16} />
        Voltar para o login
      </BackLink>

      <FormHeader>
        <FormTitle>Esqueci minha senha</FormTitle>
        <FormSubtitle>Informe seu e-mail e enviaremos um link para redefinir sua senha</FormSubtitle>
      </FormHeader>

      {sent ? (
        <SuccessMsg>
          Se esse e-mail estiver cadastrado, você vai receber um link para redefinir sua senha em instantes.
        </SuccessMsg>
      ) : (
        <Form onSubmit={handleSubmit(submit)}>
          <TextInput label="E-mail" control={control} name="email" type="email" autoFocus placeholder="seu@email.com" />
          <SubmitButton
            variant="primary"
            size="lg"
            fullWidth
            type="submit"
            disabled={submitting}
            style={{ marginTop: 8 }}
          >
            {submitting ? (
              'Enviando...'
            ) : (
              <>
                <Send size={16} />
                Enviar link
              </>
            )}
          </SubmitButton>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </Form>
      )}
    </>
  );
}
