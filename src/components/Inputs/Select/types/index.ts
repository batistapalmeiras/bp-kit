// React
import { ReactNode, SelectHTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface SelectProps<T extends FieldValues, N extends FieldPath<T>> {
  label: string;
  control: Control<T>;
  name: N;
  children: ReactNode;
  wrapperStyle?: React.CSSProperties;
}

export type SelectSize = 'sm' | 'md';

export interface RawSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  /** Matches Button's 'sm' (36px) height, for rows pairing a select with a
   * compact button or SearchInput. Defaults to 'md' (56px), the original size. */
  size?: SelectSize;
  wrapperStyle?: React.CSSProperties;
  error?: string;
}
