// React
import { TextareaHTMLAttributes } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface TextareaProps<T extends FieldValues, N extends FieldPath<T>> {
  label: string;
  control: Control<T>;
  name: N;
  wrapperStyle?: React.CSSProperties;
  placeholder?: string;
  rows?: number;
}

export interface RawTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  wrapperStyle?: React.CSSProperties;
  error?: string;
}
