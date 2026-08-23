// Libs
import styled from 'styled-components';

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const MonthCell = styled.button<{ $selected?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.sm};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.primary : 'transparent')};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.onPrimary : theme.colors.ink)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme, $selected }) => ($selected ? theme.colors.primaryActive : theme.colors.surfaceStrong)};
  }
`;
