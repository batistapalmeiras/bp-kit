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

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Box = styled.div<{ $variant: ModalVariant; $fullScreenOnMobile: boolean }>`
  --modal-x: 32px;
  --modal-top: 28px;
  --modal-bottom: 28px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.canvas};
  border-radius: ${({ theme }) => theme.rounded.lg};
  width: 100%;
  max-width: 60%;
  max-height: calc(100vh - 48px);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  animation: ${fadeUp} 0.25s ease;

  @media (max-width: 480px) {
    --modal-x: 20px;
    --modal-top: 24px;
    --modal-bottom: 24px;
    align-self: flex-end;
    max-width: 100%;
    width: 100%;
    height: calc(100% - 16px - env(safe-area-inset-top));
    max-height: none;
    border-radius: ${({ theme }) => theme.rounded.lg} ${({ theme }) => theme.rounded.lg} 0 0;
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
          --modal-x: 32px;
          --modal-top: 32px;
          --modal-bottom: 32px;
          max-width: ${$variant === 'drawer-wide' ? 'min(90vw, 720px)' : 'min(90vw, 440px)'};
          height: 100%;
          max-height: none;
          border-radius: 0;
          animation: ${slideInRight} 0.25s cubic-bezier(0.32, 0.72, 0, 1);
        }
      `) ||
    undefined}

  /* Opt-in via fullScreenOnMobile (see useModal) — on phones the modal fills
     the whole screen instead of hugging the bottom. */
  ${({ $fullScreenOnMobile }) =>
    ($fullScreenOnMobile &&
      css`
        @media (max-width: 744px) {
          --modal-x: 20px;
          --modal-top: 24px;
          --modal-bottom: 24px;
          max-width: 100%;
          margin-top: 0;
          height: 100%;
          max-height: none;
          border-radius: 0;
        }
      `) ||
    undefined}
`;

/* The title sits outside the scrolling area: ModalTitle portals its row into
   this slot, so only the content between the title and the end scrolls. */
export const ModalHeader = styled.div<{ $scrolled: boolean }>`
  flex: none;
  padding: var(--modal-top) var(--modal-x) 16px;
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.hairline : 'transparent')};

  &:empty {
    display: none;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 var(--modal-x) var(--modal-bottom);

  ${ModalHeader}:empty + & {
    padding-top: var(--modal-top);
  }
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
  position: sticky;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0 calc(-1 * var(--modal-bottom, 0px));
  padding: 16px 0 var(--modal-bottom, 0px);
  background: ${({ theme }) => theme.colors.canvas};

  & > button {
    width: 100%;
  }
`;
