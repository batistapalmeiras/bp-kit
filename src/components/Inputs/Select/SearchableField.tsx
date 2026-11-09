// React
import { KeyboardEvent, Ref, useId, useMemo, useState } from 'react';
// Components
import { Dropdown, EmptyOption, Wrap } from '../MultiSelect/styles';
// Local
import { filterOptions, SelectOption } from './options';
import { ComboInput, SearchOption } from './styles';

interface Props {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  inputRef: Ref<HTMLInputElement>;
  invalid: boolean;
  label: string;
}

export function SearchableField({ options, value, onChange, onBlur, inputRef, invalid, label }: Props) {
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlight, setHighlight] = useState(0);

  const placeholder = options.find((option) => option.value === '')?.label ?? 'Buscar…';
  const choices = useMemo(() => options.filter((option) => option.value !== ''), [options]);
  const visible = useMemo(() => filterOptions(choices, query), [choices, query]);
  const selectedLabel = choices.find((option) => option.value === value)?.label ?? '';

  const close = () => {
    setOpen(false);
    setQuery('');
  };

  const choose = (option: SelectOption) => {
    onChange(option.value);
    close();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setHighlight((current) => Math.min(Math.max(current + step, 0), Math.max(visible.length - 1, 0)));
      return;
    }
    if (event.key === 'Enter' && open) {
      event.preventDefault();
      const option = visible[highlight];
      if (option) choose(option);
      return;
    }
    if (event.key === 'Escape') close();
  };

  return (
    <Wrap>
      <ComboInput
        ref={inputRef}
        type="text"
        role="combobox"
        aria-label={label}
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-invalid={invalid}
        autoComplete="off"
        placeholder={open && selectedLabel ? selectedLabel : placeholder}
        value={open ? query : selectedLabel}
        onFocus={() => {
          setOpen(true);
          setHighlight(0);
        }}
        onClick={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setHighlight(0);
          setOpen(true);
        }}
        onKeyDown={onKeyDown}
        onBlur={() => {
          close();
          onBlur();
        }}
      />
      {open && (
        <Dropdown id={listId} role="listbox" aria-label={label}>
          {visible.length === 0 && <EmptyOption>Nenhuma opção encontrada.</EmptyOption>}
          {visible.map((option, index) => (
            <SearchOption
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              $selected={option.value === value}
              $highlighted={index === highlight}
              onMouseDown={(event) => event.preventDefault()}
              onMouseEnter={() => setHighlight(index)}
              onClick={() => choose(option)}
            >
              {option.label}
            </SearchOption>
          ))}
        </Dropdown>
      )}
    </Wrap>
  );
}
