// Libs
import { Search } from 'lucide-react';
// Local
import { Field, Wrapper } from './styles';
import { SearchInputProps } from './types';

export function SearchInput({ value, onChange, placeholder, size = 'md', autoFocus }: SearchInputProps) {
  return (
    <Wrapper>
      <Search size={16} />
      <Field
        $size={size}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
}
