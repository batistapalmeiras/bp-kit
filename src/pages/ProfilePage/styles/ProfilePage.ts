// Libs
import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 560px;
`;

export const Identity = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hairlineSoft};
`;

export const Name = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.1;
  margin-bottom: 4px;
`;

export const RoleLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.muted};
`;

export const Section = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SectionDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.hairlineSoft};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.hairlineSoft};

  @media (max-width: 480px) {
    button { flex: 1; }
  }
`;

// Follows right after an Actions block (which already carries its own
// divider + top padding) — a second border-top + spacing.lg here would
// stack into an oversized gap, so this only adds a little breathing room.
export const LogoutAction = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`;
