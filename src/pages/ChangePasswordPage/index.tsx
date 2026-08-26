// React
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Inputs/TextInput';
import { PageHeader } from '../../components/PageHeader';
import { useToast } from '../../components/Toast';
// Local
import { useAuthCtx } from '../../hooks/useAuth';
import { text } from '../../text';
import { Actions, Section, Wrap } from '../ProfilePage/styles';
import { PasswordFormValues, passwordSchema } from './validators';

export function ChangePasswordPage() {
  const { updatePassword } = useAuthCtx();
  const navigate = useNavigate();
  const { show: showToast, toast } = useToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: PasswordFormValues) => {
    const err = await updatePassword(data.password);
    showToast(err ?? 'Senha atualizada com sucesso.');
    if (!err) reset();
  };

  return (
    <Wrap>
      <PageHeader title="Alterar senha" back />

      <Section>
        <TextInput label="Nova senha" control={control} name="password" type="password" placeholder="Mínimo 6 caracteres" />
        <TextInput
          label="Confirmar nova senha"
          control={control}
          name="confirmPassword"
          type="password"
          placeholder="Repita a nova senha"
        />
      </Section>

      <Actions>
        <Button variant="secondary" size="md" onClick={() => navigate(-1)}>
          {text.actions.cancel}
        </Button>
        <Button variant="primary" size="md" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar nova senha'}
        </Button>
      </Actions>
      {toast}
    </Wrap>
  );
}
