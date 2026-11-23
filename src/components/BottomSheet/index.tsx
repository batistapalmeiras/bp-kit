// React
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
// Libs
import { Check, X } from 'lucide-react';
// Local
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useScrollLock } from '../../hooks/useScrollLock';
import { Backdrop, CloseButton, Content, Dialog, Handle, Header, Option, OptionList, Overlay, Sheet, Title } from './styles';

const SHEET_MEDIA = '(max-width: 744px)';

export interface SheetOption<T extends string> {
  value: T;
  label: string;
}

interface CommonProps {
  onClose: () => void;
  height?: 'content' | 'half';
}

interface ContentProps extends CommonProps {
  title?: string;
  children: ReactNode;
  options?: undefined;
  value?: undefined;
  onChange?: undefined;
}

interface OptionsProps<T extends string> extends CommonProps {
  title: string;
  options: SheetOption<T>[];
  value: T;
  onChange: (value: T) => void;
  children?: undefined;
}

export type BottomSheetProps<T extends string> = ContentProps | OptionsProps<T>;

function CenteredDialog({ label, onClose, children }: { label?: string; onClose: () => void; children: ReactNode }) {
  useScrollLock();
  return createPortal(
    <Backdrop onClick={onClose}>
      <Dialog role="dialog" aria-modal="true" aria-label={label} onClick={(e) => e.stopPropagation()}>
        {children}
      </Dialog>
    </Backdrop>,
    document.body,
  );
}

function SheetPanel({ half, onClose, children }: { half: boolean; onClose: () => void; children: ReactNode }) {
  useScrollLock();
  return createPortal(
    <>
      <Overlay onClick={onClose} />
      <Sheet>
        <Handle />
        <Content $half={half}>{children}</Content>
      </Sheet>
    </>,
    document.body,
  );
}

export function BottomSheet<T extends string = string>(props: BottomSheetProps<T>) {
  const { title, onClose, height = 'content' } = props;
  const asSheet = useMediaQuery(SHEET_MEDIA);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const body =
    props.options === undefined ? (
      props.children
    ) : (
      <OptionList role="radiogroup" aria-label={title}>
        {props.options.map((option) => {
          const selected = option.value === props.value;
          return (
            <Option
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              $selected={selected}
              onClick={() => {
                props.onChange(option.value);
                onClose();
              }}
            >
              {option.label}
              {selected && <Check size={18} aria-hidden="true" />}
            </Option>
          );
        })}
      </OptionList>
    );

  const content = (
    <>
      {title && (
        <Header>
          <Title>{title}</Title>
          <CloseButton type="button" aria-label="Fechar" onClick={onClose}>
            <X size={18} />
          </CloseButton>
        </Header>
      )}
      {body}
    </>
  );

  return asSheet ? (
    <SheetPanel half={height === 'half'} onClose={onClose}>
      {content}
    </SheetPanel>
  ) : (
    <CenteredDialog label={title} onClose={onClose}>
      {content}
    </CenteredDialog>
  );
}
