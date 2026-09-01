// Libs
import { Control, FieldPath, FieldValues } from 'react-hook-form';

export interface DatePickerProps<T extends FieldValues, N extends FieldPath<T>> {
  label: string;
  control: Control<T>;
  name: N;
  wrapperStyle?: React.CSSProperties;
  placeholder?: string;
  isDateDisabled?: (date: Date) => boolean;
  /** Month to open the calendar on when there's no value yet (defaults to
   * today's month) — e.g. the earliest allowed date, so the picker doesn't
   * land on a month that's entirely disabled by isDateDisabled. */
  initialMonth?: Date;
}
