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
import { Actions, Identity, Name, RoleLabel, Section, SectionDivider, SectionTitle, Wrap } from './styles';
import { ProfileFormValues, profileSchema } from './validators';

export interface ProfilePageProps {
  /** Display label for the user's role (e.g. "Administrador"). Each app defines its own role vocabulary. */
  roleLabel?: string;
  /** Route to the app's "Alterar senha" screen (bp-kit's ChangePasswordPage mounted there). Omit to hide the Segurança section entirely. */
  changePasswordPath?: string;
}

export function ProfilePage({ roleLabel, changePasswordPath }: ProfilePageProps) {
  const { user, userEmail, updateProfile } = useAuthCtx();
  const navigate = useNavigate();
  const { show: showToast, toast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: user?.name ?? '', email: userEmail },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    const err = await updateProfile(data.name, data.email);
    showToast(err ?? 'Perfil atualizado com sucesso.');
  };

  return (
    <Wrap>
      <PageHeader title="Meu perfil" back />

      <Identity>
        <Name>{user?.name ?? '—'}</Name>
        {roleLabel && <RoleLabel>{roleLabel}</RoleLabel>}
      </Identity>

      <Section>
        <SectionTitle>Informações pessoais</SectionTitle>
        <SectionDivider />
        <TextInput label={text.fields.fullName} control={control} name="name" placeholder="Nome e sobrenome" />
        <TextInput
          label="E-mail de acesso"
          control={control}
          name="email"
          type="email"
          placeholder={text.fields.emailPlaceholder}
        />
      </Section>

      <Actions>
        <Button variant="secondary" size="md" onClick={() => navigate(-1)}>
          {text.actions.cancel}
        </Button>
        <Button variant="primary" size="md" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar alterações'}
        </Button>
      </Actions>

      {changePasswordPath && (
        <>
          <Section>
            <SectionTitle>Segurança</SectionTitle>
          </Section>
          <Actions>
            <Button variant="secondary" size="md" onClick={() => navigate(changePasswordPath)}>
              Alterar senha
            </Button>
          </Actions>
        </>
      )}
      {toast}
    </Wrap>
  );
}
