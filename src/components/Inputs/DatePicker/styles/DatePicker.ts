// Libs
import styled from 'styled-components';

export const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const WeekdayLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.captionSm.fontSize};
  color: ${({ theme }) => theme.colors.mutedSoft};
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const DayCell = styled.button<{ $selected?: boolean; $today?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.primary : 'transparent')};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.onPrimary : theme.colors.ink)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: ${({ $selected, $today }) => ($selected || $today ? 600 : 400)};
  box-shadow: ${({ theme, $today, $selected }) => ($today && !$selected ? `inset 0 0 0 1px ${theme.colors.ink}` : 'none')};
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${({ theme, $selected }) => ($selected ? theme.colors.primaryActive : theme.colors.surfaceStrong)};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.mutedSoft};
    cursor: not-allowed;
  }
`;
