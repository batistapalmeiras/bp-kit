// Libs
import { Search } from 'lucide-react';
// Local
import { Field, Wrapper } from './styles';
import { SearchInputProps } from './types';

export function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <Wrapper>
      <Search size={16} />
      <Field placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </Wrapper>
  );
}
