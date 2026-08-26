// React
import { useEffect, useRef, useState } from 'react';
// Components
import { BaseInput } from '../BaseInput';
// Local
import { Chip, ChipRow, Dropdown, DropdownOption, EmptyOption, LimitHint, RemoveChip, SearchInput, Wrap } from './styles';
import { MultiSelectProps } from './types';

// Chips for what's already selected + a search box that filters the
// remaining options in a dropdown — reads better than a long checkbox list
// once there are more than a handful of options (e.g. a ministry/interest
// picklist with a dozen-plus entries).
export function MultiSelect({ label, options, value, onChange, placeholder = 'Buscar…', disabled, max, error }: MultiSelectProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

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
  const available = options.filter((o) => !value.includes(o.value) && (!q || o.label.toLowerCase().includes(q)));

  const add = (v: string) => {
    if (atLimit) return;
    onChange([...value, v]);
    setQuery('');
  };

  const remove = (v: string) => onChange(value.filter((x) => x !== v));

  return (
    <BaseInput label={label} error={error}>
      <Wrap ref={wrapRef}>
        {value.length > 0 && (
          <ChipRow>
            {value.map((v) => (
              <Chip key={v}>
                {labelFor(v)}
                {!disabled && (
                  <RemoveChip type="button" onClick={() => remove(v)} aria-label={`Remover ${labelFor(v)}`}>
                    ×
                  </RemoveChip>
                )}
              </Chip>
            ))}
          </ChipRow>
        )}

        {!disabled && !atLimit && (
          <>
            <SearchInput
              type="text"
              placeholder={placeholder}
              value={query}
              onFocus={() => setOpen(true)}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
            />
            {open && (
              <Dropdown role="listbox">
                {available.length === 0 && <EmptyOption>Nenhuma opção encontrada.</EmptyOption>}
                {available.map((o) => (
                  <DropdownOption key={o.value} type="button" role="option" onClick={() => add(o.value)}>
                    {o.label}
                  </DropdownOption>
                ))}
              </Dropdown>
            )}
          </>
        )}

        {atLimit && <LimitHint>Limite de {max} selecionados atingido.</LimitHint>}
      </Wrap>
    </BaseInput>
  );
}
