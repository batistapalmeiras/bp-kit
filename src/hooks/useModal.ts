// React
import { createElement,ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
// Components
import { Modal, ModalVariant } from '../components/Modal';


export function useModal(variant: ModalVariant = 'dialog') {
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = (c: ReactNode) => setContent(c);
  const close = () => setContent(null);

  const modal = content !== null
    ? createPortal(createElement(Modal, { close, variant, children: content }), document.body)
    : null;

  return { open, close, modal };
}
