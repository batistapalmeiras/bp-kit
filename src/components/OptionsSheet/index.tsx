// React
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
// Libs
import { Check, X } from 'lucide-react';
// Local
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useScrollLock } from '../../hooks/useScrollLock';
import { BottomSheet } from '../BottomSheet';
import { Backdrop, CloseButton, Dialog, Header, Option, OptionList, Title } from './styles';

const SHEET_MEDIA = '(max-width: 1024px)';

function CenteredDialog({ label, onClose, children }: { label: string; onClose: () => void; children: ReactNode }) {
  useScrollLock();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return createPortal(
    <Backdrop onClick={onClose}>
      <Dialog role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()}>
        {children}
      </Dialog>
    </Backdrop>,
    document.body,
  );
}

export interface SheetOption<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  title: string;
  options: SheetOption<T>[];
  value: T;
  onChange: (value: T) => void;
  onClose: () => void;
}

export function OptionsSheet<T extends string>({ title, options, value, onChange, onClose }: Props<T>) {
  const asSheet = useMediaQuery(SHEET_MEDIA);
  const choose = (next: T) => {
    onChange(next);
    onClose();
  };

  const content = (
    <>
      <Header>
        <Title>{title}</Title>
        <CloseButton type="button" aria-label="Fechar" onClick={onClose}>
          <X size={18} />
        </CloseButton>
      </Header>
      <OptionList role="radiogroup" aria-label={title}>
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <Option
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              $selected={selected}
              onClick={() => choose(option.value)}
            >
              {option.label}
              {selected && <Check size={18} aria-hidden="true" />}
            </Option>
          );
        })}
      </OptionList>
    </>
  );

  return asSheet ? (
    <BottomSheet onClose={onClose}>{content}</BottomSheet>
  ) : (
    <CenteredDialog label={title} onClose={onClose}>
      {content}
    </CenteredDialog>
  );
}
