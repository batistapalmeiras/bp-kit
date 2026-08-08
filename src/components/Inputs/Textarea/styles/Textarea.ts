// Libs
import styled from 'styled-components';

export const TextareaField = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedSoft};
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.ink};
    border-width: 2px;
    padding: calc(${({ theme }) => theme.spacing.sm} - 1px) calc(${({ theme }) => theme.spacing.md} - 1px);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.mutedSoft};
    cursor: not-allowed;
  }
`;
