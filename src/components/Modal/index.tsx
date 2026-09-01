// React
import React, { useEffect, useRef } from 'react';
// Libs
import { X } from 'lucide-react';
// Local
import { Box, CloseButton, ModalVariant, Overlay, TitleRow, TitleText } from './styles';
export { ModalActions } from './styles';
export type { ModalVariant } from './styles';

interface ModalTitleProps {
  children: React.ReactNode;
  onClose?: () => void;
}

// onClose is optional so existing call sites (<ModalTitle>Texto</ModalTitle>,
// relying on the backdrop click or Escape to dismiss) keep working unchanged.
export function ModalTitle({ children, onClose }: ModalTitleProps) {
  return (
    <TitleRow>
      <TitleText>{children}</TitleText>
      {onClose && (
        <CloseButton type="button" onClick={onClose} aria-label="Fechar">
          <X size={18} />
        </CloseButton>
      )}
    </TitleRow>
  );
}

interface Props {
  children: React.ReactNode;
  close: () => void;
  variant?: ModalVariant;
}

export function Modal({ children, close, variant = 'dialog' }: Props) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.focus();
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
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Box>
    </Overlay>
  );
}
