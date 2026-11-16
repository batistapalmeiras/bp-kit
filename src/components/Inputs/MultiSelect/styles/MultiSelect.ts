// Libs
import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const Field = styled.div<{ $focused?: boolean; $disabled?: boolean; $invalid?: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: 56px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  cursor: pointer;
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

  ${({ $invalid, $focused, theme }) =>
    $invalid &&
    !$focused &&
    `
      border-color: ${theme.colors.primaryErrorText};
    `}

  ${({ $disabled, theme }) =>
    $disabled &&
    `
      background: ${theme.colors.surfaceSoft};
      cursor: not-allowed;
    `}
`;

export const ToggleButton = styled.button<{ $open?: boolean }>`
  flex: 1;
  min-width: 0;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.body};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
    transition: transform 0.15s;
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  }
`;

export const ToggleText = styled.span<{ $empty: boolean }>`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme, $empty }) => ($empty ? theme.colors.mutedSoft : theme.colors.ink)};
`;

export const SearchBox = styled.div`
  position: sticky;
  top: calc(-1 * ${({ theme }) => theme.spacing.xs});
  z-index: 1;
  margin: calc(-1 * ${({ theme }) => theme.spacing.xs}) calc(-1 * ${({ theme }) => theme.spacing.xs})
    ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.canvas};
  border-bottom: 1px solid ${({ theme }) => theme.colors.hairline};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  outline: none;
  background: ${({ theme }) => theme.colors.canvas};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme }) => theme.colors.ink};

  &:focus {
    border-color: ${({ theme }) => theme.colors.ink};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedSoft};
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
  overflow-x: hidden;
  z-index: 20;
  padding: ${({ theme }) => theme.spacing.xs};
  scroll-margin-bottom: 128px;
`;

// A div, not a button — it wraps a Checkbox (itself a <label>), and
// interactive-in-interactive nesting gets flaky with real buttons.
export const DropdownOption = styled.div<{ $disabled?: boolean; $selected?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 44px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  background: ${({ $selected, theme }) => ($selected ? theme.colors.primarySoft : 'transparent')};

  & > label {
    flex: 1;
    align-items: center;
    min-height: 44px;
    gap: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  }

  &:hover {
    background: ${({ $selected, theme }) => ($selected ? theme.colors.primarySoft : theme.colors.surfaceSoft)};
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
