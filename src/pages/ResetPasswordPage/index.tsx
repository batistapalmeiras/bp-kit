// React
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Components
import { TextInput } from '../../components/Inputs/TextInput';
import { useAuthCtx } from '../../hooks/useAuth';
// Local
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
import { PasswordFormValues, passwordSchema } from '../ChangePasswordPage/validators';

export interface ResetPasswordPageProps {
  brand: LoginPageBrand;
  loginPath: string;
}

export function ResetPasswordPage({ brand, loginPath }: ResetPasswordPageProps) {
  const { user, loading, updatePassword, logout } = useAuthCtx();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: PasswordFormValues) => {
    const err = await updatePassword(data.password);
    if (err) {
      setError('password', { message: err });
      return;
    }
    await logout();
    setDone(true);
  };

  const invalidLink = !done && !loading && !user;

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
            <FormTitle>Nova senha</FormTitle>
            <FormSubtitle>Defina uma nova senha para sua conta</FormSubtitle>
          </FormHeader>

          {done && (
            <>
              <SuccessMsg>Senha atualizada com sucesso. Entre novamente com a nova senha.</SuccessMsg>
              <FooterLink type="button" onClick={() => navigate(loginPath)}>
                Ir para o login
              </FooterLink>
            </>
          )}

          {invalidLink && (
            <>
              <ErrorMsg>Este link é inválido ou expirou. Solicite um novo link de recuperação.</ErrorMsg>
              <FooterLink type="button" onClick={() => navigate(loginPath)}>
                Voltar para o login
              </FooterLink>
            </>
          )}

          {!done && !invalidLink && (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Nova senha"
                control={control}
                name="password"
                type="password"
                autoFocus
                placeholder="Mínimo 6 caracteres"
              />
              <TextInput
                label="Confirmar nova senha"
                control={control}
                name="confirmPassword"
                type="password"
                placeholder="Repita a nova senha"
              />
              <SubmitButton
                variant="primary"
                size="lg"
                fullWidth
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: 8 }}
              >
                {isSubmitting ? 'Salvando...' : 'Salvar nova senha'}
              </SubmitButton>
            </Form>
          )}
        </FormBox>
      </FormPanel>
    </Page>
  );
}
