// Libs
import styled from 'styled-components';
// Components
import { fadeIn, fadeUp } from '../../../styles/animations';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.base};
  background: rgba(0, 0, 0, 0.35);
  animation: ${fadeIn} 0.2s ease;
`;

export const Dialog = styled.div`
  width: 100%;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.rounded.lg};
  background: ${({ theme }) => theme.colors.canvas};
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${fadeUp} 0.2s ease;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.titleMd.fontSize};
  font-weight: ${({ theme }) => theme.typography.titleMd.fontWeight};
  color: ${({ theme }) => theme.colors.ink};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.rounded.full};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 52px;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.hairlineSoft};
  background: transparent;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  color: ${({ theme }) => theme.colors.ink};
  text-align: left;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  svg {
    flex: none;
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;
