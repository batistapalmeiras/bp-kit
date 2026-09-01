// Libs
import styled, { css } from 'styled-components';
// Components
import { fadeIn, fadeUp, slideInRight } from '../../../styles/animations';

export type ModalVariant = 'dialog' | 'drawer' | 'drawer-wide';

export const Overlay = styled.div<{ $variant: ModalVariant }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;

  @media (min-width: 745px) {
    justify-content: ${({ $variant }) => ($variant === 'dialog' ? 'center' : 'flex-end')};
  }
`;

export const Box = styled.div<{ $variant: ModalVariant }>`
  background: ${({ theme }) => theme.colors.canvas};
  border-radius: ${({ theme }) => theme.rounded.lg};
  padding: 28px 32px;
  width: 100%;
  max-width: 60%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${fadeUp} 0.25s ease;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-top: 35%;
    width: 100%;
    height: 100%;
    padding: 24px 20px;
    overflow-y: auto;
  }

  /* Opt-in via variant="drawer"/"drawer-wide" (see useModal) — on
     desktop/tablet, opens as a right-side drawer instead of a centered
     dialog. Apps that don't pass it keep the centered dialog unchanged at
     every breakpoint. "drawer-wide" is the same slide-in-from-the-right
     drawer, just noticeably wider — reaching further toward the middle of
     the screen instead of hugging the edge — for a form substantial enough
     that 440px feels cramped. */
  ${({ $variant }) =>
    (($variant === 'drawer' || $variant === 'drawer-wide') &&
      css`
        @media (min-width: 745px) {
          max-width: ${$variant === 'drawer-wide' ? 'min(90vw, 720px)' : 'min(90vw, 440px)'};
          height: 100%;
          border-radius: 0;
          padding: 32px;
          overflow-y: auto;
          animation: ${slideInRight} 0.25s cubic-bezier(0.32, 0.72, 0, 1);
        }
      `) ||
    undefined}
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: 24px;
`;

export const TitleText = styled.h3`
  font-size: ${({ theme }) => theme.typography.displaySm.fontSize};
  font-weight: ${({ theme }) => theme.typography.displaySm.fontWeight};
  color: ${({ theme }) => theme.colors.ink};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-top: 2px;
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

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 28px;
`;
