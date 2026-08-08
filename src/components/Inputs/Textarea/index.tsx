// React
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Components
import { BaseInput } from '../BaseInput';
// Local
import { TextareaField } from './styles';
import { RawTextareaProps, TextareaProps } from './types';

export function RawTextarea({ label, wrapperStyle, error, ...rest }: RawTextareaProps) {
  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={error}>
      <TextareaField {...rest} />
    </BaseInput>
  );
}

export function Textarea<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder,
  rows,
}: TextareaProps<T, N>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <TextareaField
        placeholder={placeholder}
        rows={rows}
        value={field.value ?? ''}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
        ref={field.ref}
      />
    </BaseInput>
  );
}
