// Libs
import styled from 'styled-components';

export const Wrapper = styled.div<{ $compact: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ $compact, theme }) =>
    $compact &&
    `
    @media (max-width: 744px) {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      margin-bottom: 0;
    }
  `}
`;

export const Back = styled.button<{ $compact: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
  margin-left: -${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  ${({ $compact }) =>
    $compact &&
    `
    @media (max-width: 744px) {
      margin-bottom: 0;
    }
  `}
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;

export const Row = styled.div<{ $actionAlign: 'center' | 'end' }>`
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: ${({ $actionAlign }) => ($actionAlign === 'end' ? 'flex-end' : 'center')};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.base};
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Title = styled.h2<{ $compact: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.2;

  ${({ $compact, theme }) =>
    $compact &&
    `
    @media (max-width: 744px) {
      font-size: ${theme.typography.titleMd.fontSize};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}
`;

export const Subtitle = styled.p<{ $compact: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme }) => theme.colors.muted};

  ${({ $compact }) =>
    $compact &&
    `
    @media (max-width: 744px) {
      display: none;
    }
  `}
`;
