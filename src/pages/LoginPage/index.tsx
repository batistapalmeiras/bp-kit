// React
import { ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Components
import { TextInput } from '../../components/Inputs/TextInput';
// Local
import { useLogin } from './hooks';
import { text } from '../../text';
import {
  Brand,
  BrandMark,
  BrandName,
  BrandQuote,
  BrandSub,
  BrandText,
  ErrorMsg,
  ForgotLink,
  Form,
  FormBox,
  FormHeader,
  FormPanel,
  FormSubtitle,
  FormTitle,
  Page,
  SubmitButton,
} from './styles';
import { LoginFormValues, loginSchema } from './validators';

export interface LoginPageBrand {
  icon: string;
  iconAlt: string;
  name: string;
  sub: string;
  quote?: string;
}

export interface LoginPageProps {
  brand: LoginPageBrand;
  resolveRoute: (role: string) => string;
  forgotPasswordPath?: string;
  footerSlot?: ReactNode;
}

export function LoginPage({ brand, resolveRoute, forgotPasswordPath, footerSlot }: LoginPageProps) {
  const { error, submitting, handleLogin } = useLogin(resolveRoute);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <Page>
      <Brand>
        <BrandMark>
          <img src={brand.icon} alt={brand.iconAlt} />
        </BrandMark>
        <BrandText>
          <BrandName>{brand.name}</BrandName>
          <BrandSub>{brand.sub}</BrandSub>
        </BrandText>
        {brand.quote && <BrandQuote>{brand.quote}</BrandQuote>}
      </Brand>

      <FormPanel>
        <FormBox>
          <FormHeader>
            <FormTitle>Bem-vindo</FormTitle>
            <FormSubtitle>Entre com suas credenciais para continuar</FormSubtitle>
          </FormHeader>

          <Form onSubmit={handleSubmit(handleLogin)}>
            <TextInput
              label={text.fields.email}
              control={control}
              name="email"
              type="email"
              autoFocus
              placeholder={text.fields.emailPlaceholder}
            />
            <TextInput
              label="Senha"
              control={control}
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
            />
            {forgotPasswordPath && (
              <ForgotLink type="button" onClick={() => navigate(forgotPasswordPath)}>
                Esqueci minha senha
              </ForgotLink>
            )}
            <SubmitButton
              variant="primary"
              size="lg"
              fullWidth
              type="submit"
              disabled={submitting}
              style={{ marginTop: 8 }}
            >
              {submitting ? 'Entrando...' : 'Entrar'}
            </SubmitButton>
            {error && <ErrorMsg>{error}</ErrorMsg>}
          </Form>
          {footerSlot}
        </FormBox>
      </FormPanel>
    </Page>
  );
}
