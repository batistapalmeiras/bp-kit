// React
import { useEffect, useRef, useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar } from 'lucide-react';
// Components
import { formatLongDate, formatTypedDate, parseDateKey, parseTypedDate, toDateKey } from '../../../utils/dates';
import { maskDate } from '../../../utils/masks';
import { BaseInput } from '../BaseInput';
// Local
import { CalendarPanel } from './CalendarPanel';
import { CalendarButton, DateField, TrailingIcon, Wrapper } from './styles';
import { DatePickerProps } from './types';

export function DatePicker<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = 'dd/mm/aaaa',
  isDateDisabled,
  calendar = false,
}: DatePickerProps<T, N>) {
  const { field, fieldState } = useController({ control, name });
  const valueKey: string = field.value || '';
  const [text, setText] = useState(() => formatTypedDate(valueKey));
  const [lastValue, setLastValue] = useState(valueKey);
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: MouseEvent) => {
      if (event.target instanceof Node && !wrapperRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', closeOutside);
    return () => document.removeEventListener('mousedown', closeOutside);
  }, [open]);

  if (valueKey !== lastValue) {
    setLastValue(valueKey);
    const typed = parseTypedDate(text);
    if ((typed ? toDateKey(typed) : '') !== valueKey) setText(formatTypedDate(valueKey));
  }

  const type = (raw: string) => {
    const masked = maskDate(raw);
    setText(masked);
    const typed = parseTypedDate(masked);
    const accepted = typed && !isDateDisabled?.(typed) ? typed : null;
    field.onChange(accepted ? toDateKey(accepted) : '');
  };

  const leave = () => {
    setFocused(false);
    setText(formatTypedDate(valueKey));
    field.onBlur();
  };

  const pick = (date: Date) => {
    const key = toDateKey(date);
    field.onChange(key);
    setText(formatTypedDate(key));
    setOpen(false);
  };

  const typedDate = parseTypedDate(text);
  const shown = !focused && typedDate ? formatLongDate(typedDate) : text;

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper ref={wrapperRef}>
        <DateField
          ref={field.ref}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={placeholder}
          aria-invalid={!!fieldState.error}
          value={shown}
          onFocus={() => setFocused(true)}
          onChange={(event) => type(event.target.value)}
          onBlur={leave}
        />
        {calendar ? (
          <CalendarButton
            type="button"
            aria-label="Abrir calendário"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <Calendar size={18} />
          </CalendarButton>
        ) : (
          <TrailingIcon>
            <Calendar size={18} />
          </TrailingIcon>
        )}
        {open && (
          <CalendarPanel
            label={label}
            selected={parseDateKey(valueKey)}
            isDateDisabled={isDateDisabled}
            onSelect={pick}
            onClose={() => setOpen(false)}
          />
        )}
      </Wrapper>
    </BaseInput>
  );
}
