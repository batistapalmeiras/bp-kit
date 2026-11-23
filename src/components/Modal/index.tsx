// React
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// Libs
import { X } from 'lucide-react';
// Local
import { useScrollLock } from '../../hooks/useScrollLock';
import { Box, CloseButton, ModalBody, ModalHeader, ModalVariant, Overlay, TitleRow, TitleText } from './styles';
export { ModalActions } from './styles';
export type { ModalVariant } from './styles';

interface ModalTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const ModalHeaderSlot = createContext<HTMLDivElement | null>(null);

// onClose is optional so existing call sites (<ModalTitle>Texto</ModalTitle>,
// relying on the backdrop click or Escape to dismiss) keep working unchanged.
// The title is portaled into the fixed header of the modal, so only the
// content between the title and the end of the modal scrolls.
export function ModalTitle({ children, onClose }: ModalTitleProps) {
  const header = useContext(ModalHeaderSlot);
  const row = (
    <TitleRow>
      <TitleText>{children}</TitleText>
      {onClose && (
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          <X size={18} />
        </CloseButton>
      )}
    </TitleRow>
  );
  return header ? createPortal(row, header) : row;
}

interface Props {
  children: React.ReactNode;
  close: () => void;
  variant?: ModalVariant;
  fullScreenOnMobile?: boolean;
}

export function Modal({ children, close, variant = 'dialog', fullScreenOnMobile = false }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [header, setHeader] = useState<HTMLDivElement | null>(null);
  useScrollLock();

  useEffect(() => {
    if (!boxRef.current?.contains(document.activeElement)) boxRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [close]);

  return (
    <Overlay $variant={variant} onClick={close}>
      <Box
        ref={boxRef}
        $variant={variant}
        $fullScreenOnMobile={fullScreenOnMobile}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader ref={setHeader} $scrolled={scrolled} />
        <ModalBody onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 0)}>
          <ModalHeaderSlot.Provider value={header}>{children}</ModalHeaderSlot.Provider>
        </ModalBody>
      </Box>
    </Overlay>
  );
}
