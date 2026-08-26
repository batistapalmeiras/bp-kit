// Libs
import styled from 'styled-components';
// Components
import { InputField } from '../../BaseInput/styles';

export const Wrap = styled.div`
  position: relative;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  height: 32px;
  padding: 0 ${({ theme }) => theme.spacing.xs} 0 ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.full};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};
`;

export const RemoveChip = styled.button`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.muted};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.hairline};
    color: ${({ theme }) => theme.colors.ink};
  }
`;

export const SearchInput = styled(InputField)``;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 240px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 20;
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const DropdownOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
  }
`;

export const EmptyOption = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.muted};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const LimitHint = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.captionSm.fontSize};
  color: ${({ theme }) => theme.colors.muted};
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
`;
