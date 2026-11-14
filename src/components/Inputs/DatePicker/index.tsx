// React
import { useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar } from 'lucide-react';
// Components
import { formatLongDate, formatTypedDate, parseTypedDate, toDateKey } from '../../../utils/dates';
import { maskDate } from '../../../utils/masks';
import { BaseInput } from '../BaseInput';
// Local
import { DateField, TrailingIcon, Wrapper } from './styles';
import { DatePickerProps } from './types';

export function DatePicker<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = 'dd/mm/aaaa',
  isDateDisabled,
}: DatePickerProps<T, N>) {
  const { field, fieldState } = useController({ control, name });
  const valueKey: string = field.value || '';
  const [text, setText] = useState(() => formatTypedDate(valueKey));
  const [lastValue, setLastValue] = useState(valueKey);
  const [focused, setFocused] = useState(false);

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

  const typedDate = parseTypedDate(text);
  const shown = !focused && typedDate ? formatLongDate(typedDate) : text;

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper>
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
        <TrailingIcon>
          <Calendar size={18} />
        </TrailingIcon>
      </Wrapper>
    </BaseInput>
  );
}
