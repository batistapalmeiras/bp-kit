// Libs
import styled from 'styled-components';
// Local
import { fadeDown } from '../../../styles/animations';

export const Wrapper = styled.div`
  position: relative;
`;

export const Trigger = styled.button<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  height: 56px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.bodyMd.fontSize};
  color: ${({ theme }) => theme.colors.ink};
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  ${({ $open, theme }) =>
    $open &&
    `
    border-color: ${theme.colors.ink};
    border-width: 2px;
    padding: 0 calc(${theme.spacing.md} - 1px);
  `}
`;

export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.mutedSoft};
`;

export const Panel = styled.div`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing.xs});
  left: 0;
  right: 0;
  z-index: 20;
  background: ${({ theme }) => theme.colors.canvas};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.base};
  animation: ${fadeDown} 0.15s ease-out;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

export const HeaderLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.titleSm.fontSize};
  font-weight: ${({ theme }) => theme.typography.titleSm.fontWeight};
  color: ${({ theme }) => theme.colors.ink};
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: ${({ theme }) => theme.rounded.full};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceStrong};
  }
`;
