// React
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Libs
import { ArrowLeft } from 'lucide-react';
// Local
import { Back, Row, Subtitle, Title, Titles, Wrapper } from './styles';

interface Props {
  title: string;
  subtitle?: string;
  back?: boolean;
  action?: React.ReactNode;
  actionAlign?: 'center' | 'end';
  compact?: boolean;
}

export function PageHeader({ title, subtitle, back, action, actionAlign = 'center', compact = false }: Props) {
  const navigate = useNavigate();

  return (
    <Wrapper $compact={compact}>
      {back && (
        <Back $compact={compact} onClick={() => navigate(-1)} aria-label="Voltar">
          <ArrowLeft size={20} />
        </Back>
      )}
      <Row $actionAlign={actionAlign}>
        <Titles>
          <Title $compact={compact}>{title}</Title>
          {subtitle && <Subtitle $compact={compact}>{subtitle}</Subtitle>}
        </Titles>
        {action && <div>{action}</div>}
      </Row>
    </Wrapper>
  );
}
