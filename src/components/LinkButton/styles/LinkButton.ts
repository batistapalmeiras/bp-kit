// Libs
import styled from 'styled-components';

// A quiet, secondary action — e.g. "Limpar" below a modal's primary
// "Aplicar" button. No underline (the app's own convention: an underline
// reads as a stray typo/broken-link style, not as an action), full-width
// to match every other button in an Actions/ModalActions row, icon
// optional via the icon prop.
export const StyledLinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  border: none;
  background: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  cursor: pointer;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.ink};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.mutedSoft};
    cursor: not-allowed;
  }
`;
