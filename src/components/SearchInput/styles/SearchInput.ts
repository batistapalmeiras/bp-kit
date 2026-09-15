// Libs
import styled, { css } from 'styled-components';
// Local
import { SearchInputSize } from '../types';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  svg {
    position: absolute;
    left: ${({ theme }) => theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.muted};
    pointer-events: none;
  }
`;

// 'md' keeps the original 40px field exactly as it always was; 'sm' matches
// Button's own 'sm' (36px) and RawSelect's 'sm', so a search field can sit
// flush next to a compact button or select in the same row.
const sizeStyles: Record<SearchInputSize, ReturnType<typeof css>> = {
  sm: css`
    height: 36px;
  `,
  md: css`
    height: 40px;
  `,
};

export const Field = styled.input<{ $size?: SearchInputSize }>`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.base} 0 36px;
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.md};
  background: ${({ theme }) => theme.colors.canvas};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};
  outline: none;
  transition: border-color 0.15s;

  ${({ $size }: { $size?: SearchInputSize }) => sizeStyles[$size ?? 'md']}

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
