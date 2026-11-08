// React
import { useEffect, useRef, useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
// Components
import { BaseInput } from '../BaseInput';
import { HeaderLabel, NavButton, Panel, PanelHeader, Placeholder, Trigger, Wrapper } from '../_shared/PickerElements';
// Local
import { capitalize, MONTH_NAMES, MONTH_SHORT_NAMES } from '../../../utils/dates';
import { ChoiceCell, ChoiceGrid } from '../_shared/ChoiceGrid';
import { MonthPickerProps } from './types';

function formatMonthValue(value?: string): string | null {
  if (!value) return null;
  const [year, month] = value.split('-').map(Number);
  if (!year || !month) return null;
  return `${capitalize(MONTH_NAMES[month - 1])} de ${year}`;
}

export function MonthPicker<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = 'Selecione o mês',
}: MonthPickerProps<T, N>) {
  const { field, fieldState } = useController({ control, name });
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(() =>
    field.value ? Number(String(field.value).split('-')[0]) : new Date().getFullYear(),
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const [selectedYear, selectedMonth] = field.value ? String(field.value).split('-').map(Number) : [null, null];

  const selectMonth = (monthIndex: number) => {
    field.onChange(`${viewYear}-${String(monthIndex + 1).padStart(2, '0')}`);
    setOpen(false);
  };

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper ref={ref}>
        <Trigger type="button" $open={open} aria-invalid={!!fieldState.error} onClick={() => setOpen((v) => !v)}>
          {formatMonthValue(field.value) ?? <Placeholder>{placeholder}</Placeholder>}
          <Calendar size={18} />
        </Trigger>

        {open && (
          <Panel>
            <PanelHeader>
              <NavButton type="button" onClick={() => setViewYear((y) => y - 1)} aria-label="Ano anterior">
                <ChevronLeft size={18} />
              </NavButton>
              <HeaderLabel>{viewYear}</HeaderLabel>
              <NavButton type="button" onClick={() => setViewYear((y) => y + 1)} aria-label="Próximo ano">
                <ChevronRight size={18} />
              </NavButton>
            </PanelHeader>

            <ChoiceGrid>
              {MONTH_SHORT_NAMES.map((monthLabel, i) => (
                <ChoiceCell
                  key={monthLabel}
                  type="button"
                  $selected={selectedYear === viewYear && selectedMonth === i + 1}
                  onClick={() => selectMonth(i)}
                >
                  {monthLabel}
                </ChoiceCell>
              ))}
            </ChoiceGrid>
          </Panel>
        )}
      </Wrapper>
    </BaseInput>
  );
}
