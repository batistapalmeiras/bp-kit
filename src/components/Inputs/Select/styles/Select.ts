// Libs
import styled, { css } from 'styled-components';
// Local
import { SelectSize } from '../types';

// 'md' keeps the original 56px field exactly as it always was; 'sm' matches
// Button's own 'sm' (36px) so a select can sit flush next to a compact
// button or SearchInput in the same row.
const sizeStyles: Record<SelectSize, ReturnType<typeof css>> = {
  sm: css`
    height: 36px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
    padding-right: ${({ theme }) => theme.spacing.lg};
  `,
  md: css`
    height: 56px;
    padding: 0 ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
    padding-right: ${({ theme }) => theme.spacing.xl};
  `,
};

export const SelectField = styled.select<{ $size?: SelectSize }>`
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.ink};
  outline: none;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23222222' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.md} center;

  ${({ $size }: { $size?: SelectSize }) => sizeStyles[$size ?? 'md']}

  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.ink};
  }
`;
