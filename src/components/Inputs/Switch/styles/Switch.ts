// Libs
import styled from 'styled-components';

export const HiddenInput = styled.input`
  position: absolute;
  width: 40px;
  height: 22px;
  margin: 0;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Track = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 22px;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: ${({ theme }) => theme.colors.borderStrong};
  transition: background 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.rounded.full};
    background: ${({ theme }) => theme.colors.canvas};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    transition: transform 0.15s ease;
  }

  ${HiddenInput}:checked + & {
    background: ${({ theme }) => theme.colors.primary};
  }

  ${HiddenInput}:checked + &::after {
    transform: translateX(18px);
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryDisabled};
  }

  ${HiddenInput}:disabled + & {
    opacity: 0.5;
  }
`;

export const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodySm.fontSize};
  color: ${({ theme }) => theme.colors.ink};

  &:has(${HiddenInput}:disabled) {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.mutedSoft};
  }
`;
