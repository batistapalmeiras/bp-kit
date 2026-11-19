// React
import { useEffect, useRef, useState } from 'react';
// Libs
import { ChevronDown } from 'lucide-react';
// Components
import { BaseInput } from '../BaseInput';
import { Checkbox } from '../Checkbox';
import { filterOptions, pinnedFirst } from '../Select/options';
// Local
import {
  Dropdown,
  DropdownOption,
  EmptyOption,
  Field,
  SearchBox,
  SearchInput,
  ToggleButton,
  ToggleText,
  Wrap,
} from './styles';
import { MultiSelectProps } from './types';

const SUMMARY_NAMES = 2;

function summaryOf(labels: string[]): string {
  const shown = labels.slice(0, SUMMARY_NAMES).join(', ');
  const hidden = labels.length - SUMMARY_NAMES;
  return hidden > 0 ? `${shown} e mais ${hidden}` : shown;
}

export function MultiSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Buscar…',
  emptyText = 'Selecione',
  disabled,
  max,
  error,
  searchable = true,
}: MultiSelectProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState<string[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) dropdownRef.current?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (e.target instanceof Node && !wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  const single = max === 1;
  const atLimit = !single && !!max && value.length >= max;
  const labelFor = (v: string) => options.find((o) => o.value === v)?.label ?? v;

  const visibleOptions = searchable ? filterOptions(options, query) : options;
  const orderedOptions = pinnedFirst(visibleOptions, pinned);

  const openDropdown = () => {
    setPinned(value);
    setQuery('');
    setOpen(true);
  };

  const toggle = (v: string) => {
    const searching = query.trim() !== '';
    if (value.includes(v)) {
      onChange(value.filter((x) => x !== v));
      if (searching) setOpen(false);
      return;
    }
    if (single) {
      onChange([v]);
      setOpen(false);
      return;
    }
    if (atLimit) return;
    onChange([...value, v]);
    if (searching) setOpen(false);
  };

  const toggleOpen = () => (open ? setOpen(false) : openDropdown());

  const summary = summaryOf(value.map(labelFor));

  return (
    <BaseInput label={label} error={error}>
      <Wrap ref={wrapRef}>
        <Field $focused={open} $disabled={disabled} $invalid={!!error}>
          <ToggleButton
            type="button"
            aria-label={label}
            aria-expanded={open}
            aria-haspopup="listbox"
            title={summary || undefined}
            disabled={disabled}
            $open={open}
            onClick={toggleOpen}
          >
            <ToggleText $empty={value.length === 0}>{summary || emptyText}</ToggleText>
            <ChevronDown size={20} />
          </ToggleButton>
        </Field>

        {open && !disabled && (
          <Dropdown ref={dropdownRef} role="listbox" aria-multiselectable={!single}>
            {searchable && (
              <SearchBox>
                <SearchInput
                  type="search"
                  placeholder={placeholder}
                  aria-label={placeholder}
                  value={query}
                  autoFocus
                  onChange={(e) => setQuery(e.target.value)}
                />
              </SearchBox>
            )}
            {orderedOptions.length === 0 && <EmptyOption>Nenhuma opção encontrada.</EmptyOption>}
            {orderedOptions.map((o) => {
              const checked = value.includes(o.value);
              const rowDisabled = !checked && atLimit;
              return (
                <DropdownOption
                  key={o.value}
                  role="option"
                  aria-selected={checked}
                  $selected={checked}
                  $disabled={rowDisabled}
                >
                  <Checkbox checked={checked} disabled={rowDisabled} onChange={() => toggle(o.value)} label={o.label} />
                </DropdownOption>
              );
            })}
          </Dropdown>
        )}

      </Wrap>
    </BaseInput>
  );
}
