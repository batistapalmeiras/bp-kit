// Libs
import styled from 'styled-components';
// Components
import { InputField } from '../../BaseInput/styles';
import { Panel } from '../../_shared/PickerElements';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const DateField = styled(InputField)`
  && {
    padding-right: 48px;
  }
`;

export const TrailingIcon = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.md};
  display: flex;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
`;

export const CalendarButton = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: transparent;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
    color: ${({ theme }) => theme.colors.ink};
  }
`;

export const DatePanel = styled(Panel)`
  @media (max-width: 744px) {
    position: fixed;
    inset: 0;
    z-index: 1100;
    border: none;
    border-radius: 0;
    box-shadow: none;
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing.base} 20px;
  }
`;

export const FullScreenBar = styled.div<{ $scrolled: boolean }>`
  display: none;

  @media (max-width: 744px) {
    position: sticky;
    top: calc(-1 * ${({ theme }) => theme.spacing.base});
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: calc(-1 * ${({ theme }) => theme.spacing.base}) -20px ${({ theme }) => theme.spacing.base};
    padding: ${({ theme }) => theme.spacing.base} 20px ${({ theme }) => theme.spacing.sm};
    border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.hairline : 'transparent')};
    background: ${({ theme }) => theme.colors.canvas};
  }
`;

export const HeaderButton = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.rounded.sm};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.titleSm.fontSize};
  font-weight: ${({ theme }) => theme.typography.titleSm.fontWeight};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;

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
  background: ${({ theme, $selected }) => ($selected ? theme.gradients.primary : 'transparent')};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.onPrimary : theme.colors.ink)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  font-weight: ${({ $selected, $today }) => ($selected || $today ? 600 : 400)};
  box-shadow: ${({ theme, $today, $selected }) => ($today && !$selected ? `inset 0 0 0 1px ${theme.colors.ink}` : 'none')};
  cursor: pointer;
  transition: background 0.15s;

  @media (max-width: 744px) {
    width: 100%;
    height: 48px;
  }

  &:hover:not(:disabled) {
    background: ${({ theme, $selected }) => ($selected ? theme.gradients.primaryActive : theme.colors.surfaceStrong)};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.mutedSoft};
    cursor: not-allowed;
  }
`;
