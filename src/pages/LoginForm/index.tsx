// React
import { ReactNode, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Components
import { Checkbox } from '../../components/Inputs/Checkbox';
import { TextInput } from '../../components/Inputs/TextInput';
import { text } from '../../text';
// Local
import { useLogin } from './hooks';
import { loadRememberedLogin, saveRememberedLogin } from './rememberedLogin';
import {
  ChangeButton,
  EmailRow,
  EmailText,
  ErrorMsg,
  ForgotLink,
  Form,
  FormHeader,
  FormSubtitle,
  FormTitle,
  SubmitButton,
} from './styles';
import { LoginFormValues, loginSchema } from './validators';

export interface LoginFormProps {
  resolveRoute: (role: string) => string;
  forgotPasswordPath?: string;
  footerSlot?: ReactNode;
}

type Step = 'email' | 'confirm' | 'password';

export function LoginForm({ resolveRoute, forgotPasswordPath, footerSlot }: LoginFormProps) {
  const { error, submitting, handleLogin } = useLogin(resolveRoute);
  const navigate = useNavigate();
  const [remembered, setRemembered] = useState(loadRememberedLogin);
  const [step, setStep] = useState<Step>(remembered ? 'confirm' : 'email');
  const [remember, setRemember] = useState(true);
  const { control, handleSubmit, trigger, getValues, setValue } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: remembered?.email ?? '', password: '' },
  });

  const greeting = remembered?.firstName ? `Olá, ${remembered.firstName}` : 'Digite sua senha';

  const continueToPassword = async () => {
    if (await trigger('email')) setStep('password');
  };

  const changeEmail = () => {
    saveRememberedLogin(null);
    setRemembered(null);
    setValue('email', '');
    setValue('password', '');
    setStep('email');
  };

  const submit = handleSubmit((values) => handleLogin(values, remember));

  if (step === 'email') {
    return (
      <>
        <FormHeader>
          <FormTitle>Bem-vindo</FormTitle>
          <FormSubtitle>Informe seu e-mail para continuar</FormSubtitle>
        </FormHeader>

        <Form
          onSubmit={(event) => {
            event.preventDefault();
            continueToPassword();
          }}
        >
          <TextInput
            label={text.fields.email}
            control={control}
            name="email"
            type="email"
            autoComplete="username"
            autoFocus
            placeholder={text.fields.emailPlaceholder}
          />
          <Checkbox label="Lembrar de mim" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
          <SubmitButton variant="primary" size="lg" fullWidth type="submit">
            Continuar
          </SubmitButton>
        </Form>
        {footerSlot}
      </>
    );
  }

  return (
    <>
      <FormHeader>
        <FormTitle>{greeting}</FormTitle>
        <EmailRow>
          <EmailText>{getValues('email')}</EmailText>
          <ChangeButton type="button" onClick={changeEmail}>
            Alterar
          </ChangeButton>
        </EmailRow>
      </FormHeader>

      {step === 'confirm' ? (
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            setStep('password');
          }}
        >
          <SubmitButton variant="primary" size="lg" fullWidth type="submit">
            Continuar
          </SubmitButton>
        </Form>
      ) : (
        <Form onSubmit={submit}>
          <TextInput
            label="Senha"
            control={control}
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            placeholder="Sua senha"
          />
          {forgotPasswordPath && (
            <ForgotLink type="button" onClick={() => navigate(forgotPasswordPath)}>
              Esqueci minha senha
            </ForgotLink>
          )}
          <SubmitButton variant="primary" size="lg" fullWidth type="submit" disabled={submitting}>
            {submitting ? 'Entrando...' : 'Entrar'}
          </SubmitButton>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </Form>
      )}
      {footerSlot}
    </>
  );
}
