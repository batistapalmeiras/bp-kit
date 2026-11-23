// React
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
// Libs
import { X } from 'lucide-react';
// Local
import { useScrollLock } from '../../hooks/useScrollLock';
import {
  Box,
  CloseButton,
  ModalBody,
  ModalFooterRow,
  ModalFooterSlot,
  ModalHeader,
  ModalVariant,
  Overlay,
  TitleRow,
  TitleText,
} from './styles';
export { ModalActions } from './styles';
export type { ModalVariant } from './styles';

interface ModalTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}

interface ModalSlots {
  header: HTMLDivElement | null;
  footer: HTMLDivElement | null;
}

const ModalSlotsContext = createContext<ModalSlots>({ header: null, footer: null });

// onClose is optional so existing call sites (<ModalTitle>Texto</ModalTitle>,
// relying on the backdrop click or Escape to dismiss) keep working unchanged.
// The title is portaled into the fixed header of the modal, so only the
// content between the title and the end of the modal scrolls.
export function ModalTitle({ children, onClose }: ModalTitleProps) {
  const { header } = useContext(ModalSlotsContext);
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

// Actions that are not the submit of a form (Limpar / Aplicar, for example)
// stay in a fixed footer under the scrolling content.
export function ModalFooter({ children }: { children: React.ReactNode }) {
  const { footer } = useContext(ModalSlotsContext);
  const row = <ModalFooterRow>{children}</ModalFooterRow>;
  return footer ? createPortal(row, footer) : row;
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
  const [footer, setFooter] = useState<HTMLDivElement | null>(null);
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
          <ModalSlotsContext.Provider value={{ header, footer }}>{children}</ModalSlotsContext.Provider>
        </ModalBody>
        <ModalFooterSlot ref={setFooter} />
      </Box>
    </Overlay>
  );
}
