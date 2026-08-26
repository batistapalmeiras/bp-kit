export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  label: string;
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  max?: number;
  error?: string;
}
