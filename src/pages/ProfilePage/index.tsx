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
import { Actions, Identity, Name, RoleLabel, Section, SectionTitle, Wrap } from './styles';
import { ProfileFormValues, profileSchema } from './validators';

export interface ProfilePageProps {
  /** Display label for the user's role (e.g. "Administrador"). Each app defines its own role vocabulary. */
  roleLabel?: string;
}

export function ProfilePage({ roleLabel }: ProfilePageProps) {
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
        <TextInput label="Nome completo" control={control} name="name" placeholder="Nome e sobrenome" />
        <TextInput label="E-mail de acesso" control={control} name="email" type="email" placeholder="seu@email.com" />
      </Section>

      <Actions>
        <Button variant="secondary" size="md" onClick={() => navigate(-1)}>
          Cancelar
        </Button>
        <Button variant="primary" size="md" onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
          {isSubmitting ? 'Salvando...' : 'Salvar alterações'}
        </Button>
      </Actions>
      {toast}
    </Wrap>
  );
}
