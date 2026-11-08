// React
import { useEffect, useRef, useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
// Components
import { BaseInput } from '../BaseInput';
import { MONTH_NAMES, MONTH_SHORT_NAMES, parseDateKey, toDateKey } from '../../../utils/dates';
import { ChoiceCell, ChoiceGrid } from '../_shared/ChoiceGrid';
import { HeaderLabel, NavButton, Panel, PanelHeader, Placeholder, Trigger, Wrapper } from '../_shared/PickerElements';
// Local
import { DayCell, DayGrid, HeaderButton, WeekdayLabel, WeekdayRow } from './styles/DatePicker';
import { DatePickerProps } from './types';

type View = 'days' | 'months' | 'years';

const WEEKDAY_LABELS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const YEARS_PER_PAGE = 12;

function formatDateValue(value?: string): string | null {
  const date = parseDateKey(value);
  if (!date) return null;
  return `${date.getDate()} de ${MONTH_NAMES[date.getMonth()]} de ${date.getFullYear()}`;
}

function buildMonthGrid(year: number, month: number): (Date | null)[] {
  const startOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = Array.from({ length: startOffset }, () => null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const firstYearOfPage = (year: number) => year - (year % YEARS_PER_PAGE);

export function DatePicker<T extends FieldValues, N extends FieldPath<T>>({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = 'Selecione a data',
  isDateDisabled,
  initialMonth,
}: DatePickerProps<T, N>) {
  const { field, fieldState } = useController({ control, name });
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>('days');
  const selectedDate = parseDateKey(field.value);
  const [viewDate, setViewDate] = useState(() => selectedDate ?? initialMonth ?? new Date());
  const [pageStart, setPageStart] = useState(() => firstYearOfPage(viewDate.getFullYear()));
  const [lastInitialMonth, setLastInitialMonth] = useState(initialMonth);
  const ref = useRef<HTMLDivElement>(null);

  if (initialMonth !== lastInitialMonth) {
    setLastInitialMonth(initialMonth);
    if (!selectedDate && initialMonth) setViewDate(initialMonth);
  }

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();
  const todayKey = toDateKey(new Date());
  const selectedKey = selectedDate ? toDateKey(selectedDate) : null;

  const toggle = () => {
    setView('days');
    setOpen((current) => !current);
  };

  const changeMonth = (delta: number) => setViewDate(new Date(viewYear, viewMonth + delta, 1));

  const openYears = () => {
    setPageStart(firstYearOfPage(viewYear));
    setView('years');
  };

  const chooseYear = (year: number) => {
    setViewDate(new Date(year, viewMonth, 1));
    setView('months');
  };

  const chooseMonth = (month: number) => {
    setViewDate(new Date(viewYear, month, 1));
    setView('days');
  };

  const selectDay = (date: Date) => {
    field.onChange(toDateKey(date));
    setOpen(false);
  };

  const years = Array.from({ length: YEARS_PER_PAGE }, (_, index) => pageStart + index);

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper ref={ref}>
        <Trigger type="button" $open={open} aria-invalid={!!fieldState.error} onClick={toggle}>
          {formatDateValue(field.value) ?? <Placeholder>{placeholder}</Placeholder>}
          <Calendar size={18} />
        </Trigger>

        {open && view === 'days' && (
          <Panel>
            <PanelHeader>
              <NavButton type="button" onClick={() => changeMonth(-1)} aria-label="Mês anterior">
                <ChevronLeft size={18} />
              </NavButton>
              <HeaderButton type="button" onClick={openYears} aria-label="Escolher mês e ano">
                {MONTH_NAMES[viewMonth]} de {viewYear}
              </HeaderButton>
              <NavButton type="button" onClick={() => changeMonth(1)} aria-label="Próximo mês">
                <ChevronRight size={18} />
              </NavButton>
            </PanelHeader>

            <WeekdayRow>
              {WEEKDAY_LABELS.map((weekday) => (
                <WeekdayLabel key={weekday}>{weekday}</WeekdayLabel>
              ))}
            </WeekdayRow>

            <DayGrid>
              {buildMonthGrid(viewYear, viewMonth).map((date, index) =>
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
                  <span key={`empty-${index}`} />
                ),
              )}
            </DayGrid>
          </Panel>
        )}

        {open && view === 'months' && (
          <Panel>
            <PanelHeader>
              <NavButton
                type="button"
                onClick={() => setViewDate(new Date(viewYear - 1, viewMonth, 1))}
                aria-label="Ano anterior"
              >
                <ChevronLeft size={18} />
              </NavButton>
              <HeaderButton type="button" onClick={openYears} aria-label="Escolher ano">
                {viewYear}
              </HeaderButton>
              <NavButton
                type="button"
                onClick={() => setViewDate(new Date(viewYear + 1, viewMonth, 1))}
                aria-label="Próximo ano"
              >
                <ChevronRight size={18} />
              </NavButton>
            </PanelHeader>
            <ChoiceGrid>
              {MONTH_SHORT_NAMES.map((monthLabel, month) => (
                <ChoiceCell
                  key={monthLabel}
                  type="button"
                  $selected={selectedDate?.getFullYear() === viewYear && selectedDate.getMonth() === month}
                  onClick={() => chooseMonth(month)}
                >
                  {monthLabel}
                </ChoiceCell>
              ))}
            </ChoiceGrid>
          </Panel>
        )}

        {open && view === 'years' && (
          <Panel>
            <PanelHeader>
              <NavButton
                type="button"
                onClick={() => setPageStart((start) => start - YEARS_PER_PAGE)}
                aria-label="Anos anteriores"
              >
                <ChevronLeft size={18} />
              </NavButton>
              <HeaderLabel>
                {years[0]} – {years[years.length - 1]}
              </HeaderLabel>
              <NavButton
                type="button"
                onClick={() => setPageStart((start) => start + YEARS_PER_PAGE)}
                aria-label="Próximos anos"
              >
                <ChevronRight size={18} />
              </NavButton>
            </PanelHeader>
            <ChoiceGrid>
              {years.map((year) => (
                <ChoiceCell
                  key={year}
                  type="button"
                  $selected={selectedDate?.getFullYear() === year}
                  onClick={() => chooseYear(year)}
                >
                  {year}
                </ChoiceCell>
              ))}
            </ChoiceGrid>
          </Panel>
        )}
      </Wrapper>
    </BaseInput>
  );
}
