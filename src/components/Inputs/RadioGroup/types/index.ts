export interface RadioGroupOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  error?: string;
}
