// React
import { useEffect, useRef, useState } from 'react';
// Components
import { BaseInput } from '../BaseInput';
import { Checkbox } from '../Checkbox';
// Local
import { Chip, Dropdown, DropdownOption, EmptyOption, Field, LimitHint, RemoveChip, SearchInput, Wrap } from './styles';
import { MultiSelectProps } from './types';

// One bordered field holds the chips and the search text together (MUI
// multi-select style) instead of loose chips floating above a separate
// search box. The dropdown lists every option with a checkbox showing what's
// already picked, so toggling one on/off doesn't require it to disappear
// from view first.
export function MultiSelect({ label, options, value, onChange, placeholder = 'Buscar…', disabled, max, error }: MultiSelectProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  const atLimit = !!max && value.length >= max;
  const labelFor = (v: string) => options.find((o) => o.value === v)?.label ?? v;

  const q = query.trim().toLowerCase();
  const visibleOptions = options.filter((o) => !q || o.label.toLowerCase().includes(q));

  const toggle = (v: string) => {
    if (value.includes(v)) {
      onChange(value.filter((x) => x !== v));
      return;
    }
    if (atLimit) return;
    onChange([...value, v]);
    setQuery('');
  };

  const remove = (v: string) => onChange(value.filter((x) => x !== v));

  const focusField = () => {
    if (!disabled) inputRef.current?.focus();
  };

  return (
    <BaseInput label={label} error={error}>
      <Wrap ref={wrapRef}>
        <Field $focused={open} $disabled={disabled} onClick={focusField}>
          {value.map((v) => (
            <Chip key={v}>
              {labelFor(v)}
              {!disabled && (
                <RemoveChip
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(v);
                  }}
                  aria-label={`Remover ${labelFor(v)}`}
                >
                  ×
                </RemoveChip>
              )}
            </Chip>
          ))}
          {!disabled && (
            <SearchInput
              ref={inputRef}
              type="text"
              placeholder={value.length === 0 ? placeholder : ''}
              value={query}
              onFocus={() => setOpen(true)}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && query === '' && value.length > 0) remove(value[value.length - 1]);
              }}
            />
          )}
        </Field>

        {open && !disabled && (
          <Dropdown role="listbox">
            {visibleOptions.length === 0 && <EmptyOption>Nenhuma opção encontrada.</EmptyOption>}
            {visibleOptions.map((o) => {
              const checked = value.includes(o.value);
              const rowDisabled = !checked && atLimit;
              return (
                <DropdownOption
                  key={o.value}
                  role="option"
                  aria-selected={checked}
                  $disabled={rowDisabled}
                  onClick={() => !rowDisabled && toggle(o.value)}
                >
                  <Checkbox checked={checked} onChange={() => {}} tabIndex={-1} label={o.label} />
                </DropdownOption>
              );
            })}
          </Dropdown>
        )}

        {atLimit && <LimitHint>Limite de {max} selecionados atingido.</LimitHint>}
      </Wrap>
    </BaseInput>
  );
}
