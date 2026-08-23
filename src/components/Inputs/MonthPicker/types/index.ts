// Libs
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface MonthPickerProps<T extends FieldValues, N extends FieldPath<T>> {
  label: string;
  control: Control<T>;
  name: N;
  wrapperStyle?: React.CSSProperties;
  placeholder?: string;
}
