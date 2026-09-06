// React
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Components
import { TextInput } from '../../components/Inputs/TextInput';
// Local
import { useForgotPassword } from './hooks';
import { LoginPageBrand } from '../LoginPage';
import {
  Brand,
  BrandMark,
  BrandName,
  BrandQuote,
  BrandSub,
  BrandText,
  ErrorMsg,
  FooterLink,
  Form,
  FormBox,
  FormHeader,
  FormPanel,
  FormSubtitle,
  FormTitle,
  Page,
  SubmitButton,
  SuccessMsg,
} from '../LoginPage/styles';
import { ForgotPasswordFormValues, forgotPasswordSchema } from './validators';

export interface ForgotPasswordPageProps {
  brand: LoginPageBrand;
  loginPath: string;
  resetPasswordPath: string;
}

export function ForgotPasswordPage({ brand, loginPath, resetPasswordPath }: ForgotPasswordPageProps) {
  const { submitting, sent, error, handleSubmit: submit } = useForgotPassword(resetPasswordPath);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
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
            <FormTitle>Esqueci minha senha</FormTitle>
            <FormSubtitle>Informe seu e-mail e enviaremos um link para redefinir sua senha</FormSubtitle>
          </FormHeader>

          {sent ? (
            <SuccessMsg>
              Se esse e-mail estiver cadastrado, você vai receber um link para redefinir sua senha em instantes.
            </SuccessMsg>
          ) : (
            <Form onSubmit={handleSubmit(submit)}>
              <TextInput
                label="E-mail"
                control={control}
                name="email"
                type="email"
                autoFocus
                placeholder="seu@email.com"
              />
              <SubmitButton
                variant="primary"
                size="lg"
                fullWidth
                type="submit"
                disabled={submitting}
                style={{ marginTop: 8 }}
              >
                {submitting ? 'Enviando...' : 'Enviar link'}
              </SubmitButton>
              {error && <ErrorMsg>{error}</ErrorMsg>}
            </Form>
          )}

          <FooterLink type="button" onClick={() => navigate(loginPath)}>
            Voltar para o login
          </FooterLink>
        </FormBox>
      </FormPanel>
    </Page>
  );
}
