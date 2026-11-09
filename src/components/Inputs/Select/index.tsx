// React
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Components
import { BaseInput } from '../BaseInput';
// Local
import { optionsFromChildren } from './options';
import { SearchableField } from './SearchableField';
import { SelectField } from './styles';
import { RawSelectProps, SelectProps } from './types';

export function RawSelect({ label, size = 'md', wrapperStyle, error, children, ...rest }: RawSelectProps) {
  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={error}>
      <SelectField $size={size} aria-invalid={!!error} {...rest}>
        {children}
      </SelectField>
    </BaseInput>
  );
}

export function Select<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  children,
  searchable,
}: SelectProps<T, N>) {
  const { field, fieldState } = useController({ control, name });

  if (searchable) {
    return (
      <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
        <SearchableField
          label={label}
          options={optionsFromChildren(children)}
          value={field.value ?? ''}
          onChange={field.onChange}
          onBlur={field.onBlur}
          inputRef={field.ref}
          invalid={!!fieldState.error}
        />
      </BaseInput>
    );
  }

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <SelectField
        aria-invalid={!!fieldState.error}
        value={field.value ?? ''}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
        ref={field.ref}
      >
        {children}
      </SelectField>
    </BaseInput>
  );
}
