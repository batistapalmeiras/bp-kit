// React
import { useEffect, useRef, useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
// Components
import { BaseInput } from '../BaseInput';
import { HeaderLabel, NavButton, Panel, PanelHeader, Placeholder, Trigger, Wrapper } from '../_shared/PickerElements';
// Local
import { DayCell, DayGrid, WeekdayLabel, WeekdayRow } from './styles/DatePicker';
import { DatePickerProps } from './types';

const WEEKDAY_LABELS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const FULL_MONTH_LABELS = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

function parseDateValue(value?: string): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function formatDateValue(value?: string): string | null {
  const date = parseDateValue(value);
  if (!date) return null;
  return `${date.getDate()} de ${FULL_MONTH_LABELS[date.getMonth()]} de ${date.getFullYear()}`;
}

function toDateKey(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function buildMonthGrid(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function DatePicker<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = 'Selecione a data',
  isDateDisabled,
}: DatePickerProps<T, N>) {
  const { field, fieldState } = useController({ control, name });
  const [open, setOpen] = useState(false);
  const selectedDate = parseDateValue(field.value);
  const [viewDate, setViewDate] = useState(() => selectedDate ?? new Date());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const today = new Date();
  const todayKey = toDateKey(today);
  const selectedKey = selectedDate ? toDateKey(selectedDate) : null;
  const cells = buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth());

  const changeMonth = (delta: number) => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + delta, 1));

  const selectDay = (date: Date) => {
    field.onChange(toDateKey(date));
    setOpen(false);
  };

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper ref={ref}>
        <Trigger type="button" $open={open} onClick={() => setOpen((v) => !v)}>
          {formatDateValue(field.value) ?? <Placeholder>{placeholder}</Placeholder>}
          <Calendar size={18} />
        </Trigger>

        {open && (
          <Panel>
            <PanelHeader>
              <NavButton type="button" onClick={() => changeMonth(-1)} aria-label="Mês anterior">
                <ChevronLeft size={18} />
              </NavButton>
              <HeaderLabel>
                {FULL_MONTH_LABELS[viewDate.getMonth()]} de {viewDate.getFullYear()}
              </HeaderLabel>
              <NavButton type="button" onClick={() => changeMonth(1)} aria-label="Próximo mês">
                <ChevronRight size={18} />
              </NavButton>
            </PanelHeader>

            <WeekdayRow>
              {WEEKDAY_LABELS.map((w) => (
                <WeekdayLabel key={w}>{w}</WeekdayLabel>
              ))}
            </WeekdayRow>

            <DayGrid>
              {cells.map((date, i) =>
                date ? (
                  <DayCell
                    key={toDateKey(date)}
                    type="button"
                    disabled={isDateDisabled ? isDateDisabled(date) : false}
                    $selected={toDateKey(date) === selectedKey}
                    $today={toDateKey(date) === todayKey}
                    onClick={() => selectDay(date)}
                  >
                    {date.getDate()}
                  </DayCell>
                ) : (
                  <span key={`empty-${i}`} />
                ),
              )}
            </DayGrid>
          </Panel>
        )}
      </Wrapper>
    </BaseInput>
  );
}
