// React
import { createElement,ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
// Components
import { Modal, ModalVariant } from '../components/Modal';


interface UseModalOptions {
  fullScreenOnMobile?: boolean;
}

export function useModal(variant: ModalVariant = 'dialog', { fullScreenOnMobile = false }: UseModalOptions = {}) {
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = (c: ReactNode) => setContent(c);
  const close = () => setContent(null);

  const modal = content !== null
    ? createPortal(createElement(Modal, { close, variant, fullScreenOnMobile, children: content }), document.body)
    : null;

  return { open, close, modal };
}
