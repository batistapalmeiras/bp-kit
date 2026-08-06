// Libs
import styled from 'styled-components';

export const HiddenInput = styled.input`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 0;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Dot = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.rounded.full};
  border: 1.5px solid ${({ theme }) => theme.colors.borderStrong};
  background: ${({ theme }) => theme.colors.canvas};
  transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: ${({ theme }) => theme.rounded.full};
    background: ${({ theme }) => theme.colors.onPrimary};
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.1s ease, transform 0.1s ease;
  }

  ${HiddenInput}:checked + & {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${HiddenInput}:checked + &::after {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    transform: scale(1);
  }

  ${HiddenInput}:hover:not(:disabled) + & {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryDisabled};
  }

  ${HiddenInput}:disabled + & {
    opacity: 0.5;
  }
`;

export const OptionWrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};

  &:has(${HiddenInput}:disabled) {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mutedSoft};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const GroupLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;
