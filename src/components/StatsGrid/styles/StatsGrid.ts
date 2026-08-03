// Libs
import styled from 'styled-components';

export type StatTone = 'warning' | 'danger';

export const StatsGrid = styled.div<{ $columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns ?? 4}, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div<{ $tone?: StatTone }>`
  background: ${({ theme, $tone }) =>
    $tone === 'warning' ? theme.colors.warningSurface : $tone === 'danger' ? '#fff0f3' : theme.colors.canvas};
  border: 1px solid ${({ theme, $tone }) =>
    $tone === 'warning' ? theme.colors.warningBorder : $tone === 'danger' ? '#ffd1da' : theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.md};
  padding: ${({ theme }) => theme.spacing.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const StatLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.captionSm.fontSize};
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatValue = styled.p<{ $tone?: StatTone; $muted?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.displaySm.fontSize};
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme, $tone, $muted }) =>
    $tone === 'warning'
      ? theme.colors.warning
      : $tone === 'danger'
        ? '#c0002a'
        : $muted
          ? theme.colors.muted
          : theme.colors.ink};
`;
