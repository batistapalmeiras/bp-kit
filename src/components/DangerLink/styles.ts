// Libs
import styled from 'styled-components';

// A destructive action styled as a quiet text link rather than a full
// button — e.g. "Excluir cadastro" under a form, "Remover" below a detail
// page. Deliberately no underline: the red color alone is enough of a cue,
// and an underline read as a stray typo/broken-link style in practice.
export const DangerLink = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  border: none;
  background: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.primaryErrorText};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryErrorTextHover};
  }
`;
