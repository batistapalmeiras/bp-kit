// Libs
import styled from 'styled-components';
// Components
import type { SegmentedControlTone } from '../types';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  line-height: ${({ theme }) => theme.typography.caption.lineHeight};
  color: ${({ theme }) => theme.colors.muted};
`;

export const Toggle = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  padding: ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme }) => theme.colors.hairline};
  border-radius: ${({ theme }) => theme.rounded.md};
  background: ${({ theme }) => theme.colors.canvas};
`;

export const Btn = styled.button<{ $selected: boolean; $tone: SegmentedControlTone }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.rounded.sm};
  background: ${({ theme }) => theme.colors.canvas};
  box-shadow: ${({ theme, $selected, $tone }) => ($selected ? `inset 0 0 0 2px ${theme.colors[$tone]}` : 'none')};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.buttonSm.fontSize};
  font-weight: ${({ $selected }) => ($selected ? 600 : 500)};
  color: ${({ theme }) => theme.colors.ink};
  cursor: pointer;
  transition: box-shadow 0.15s;
`;
