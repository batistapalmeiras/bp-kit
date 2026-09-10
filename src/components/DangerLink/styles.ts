// Libs
import styled from 'styled-components';

// A destructive action styled as an outlined red button — e.g. "Excluir
// cadastro" under a form, "Remover" below a detail page. Outlined (not
// filled) keeps it visually secondary to the screen's real primary action,
// while still reading clearly as a button, not fine print.
export const DangerLink = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryErrorText};
  border-radius: ${({ theme }) => theme.rounded.md};
  background: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryErrorText};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryErrorText}0d;
    border-color: ${({ theme }) => theme.colors.primaryErrorTextHover};
    color: ${({ theme }) => theme.colors.primaryErrorTextHover};
  }
`;
