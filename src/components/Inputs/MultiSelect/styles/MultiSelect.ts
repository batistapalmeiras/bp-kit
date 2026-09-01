// Libs
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

// The whole bordered box (chips + search text share it) — reads as one
// input, MUI-multi-select style, instead of loose chips floating above a
// separate search field.
export const Field = styled.div<{ $focused?: boolean; $disabled?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: 56px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  cursor: text;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  ${({ $focused, theme }) =>
    $focused &&
    `
      border-color: ${theme.colors.ink};
      border-width: 2px;
      padding: calc(${theme.spacing.xs} - 1px) calc(${theme.spacing.md} - 1px);
    `}

  ${({ $disabled, theme }) =>
    $disabled &&
    `
      background: ${theme.colors.surfaceSoft};
      cursor: not-allowed;
    `}
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

// Borderless — sits inline inside Field, which owns the actual input chrome.
export const SearchInput = styled.input`
  flex: 1 1 80px;
  min-width: 80px;
  height: 32px;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme }) => theme.colors.ink};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedSoft};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

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

// A div, not a button — it wraps a Checkbox (itself a <label>), and
// interactive-in-interactive nesting gets flaky with real buttons.
export const DropdownOption = styled.div<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
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
