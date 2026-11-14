// React
import { useEffect, useRef, useState } from 'react';
import { FieldPath, FieldValues, useController } from 'react-hook-form';
// Libs
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
// Components
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useScrollLock } from '../../../hooks/useScrollLock';
import {
  formatTypedDate,
  MONTH_NAMES,
  MONTH_SHORT_NAMES,
  parseDateKey,
  parseTypedDate,
  toDateKey,
} from '../../../utils/dates';
import { maskDate } from '../../../utils/masks';
import { BaseInput } from '../BaseInput';
import { ChoiceCell, ChoiceGrid } from '../_shared/ChoiceGrid';
import { HeaderLabel, NavButton, PanelHeader, Wrapper } from '../_shared/PickerElements';
// Local
import {
  CalendarButton,
  DateField,
  DayCell,
  DayGrid,
  DatePanel as Panel,
  FullScreenBar,
  HeaderButton,
  WeekdayLabel,
  WeekdayRow,
} from './styles/DatePicker';
import { DatePickerProps } from './types';

type View = 'days' | 'months' | 'years';

const WEEKDAY_LABELS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const YEARS_PER_PAGE = 12;

function ScrollLock() {
  useScrollLock();
  return null;
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
  placeholder = 'dd/mm/aaaa',
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
  const fullScreen = useMediaQuery('(max-width: 744px)');
  const valueKey: string = field.value || '';
  const [text, setText] = useState(() => formatTypedDate(valueKey));
  const [lastValue, setLastValue] = useState(valueKey);

  if (initialMonth !== lastInitialMonth) {
    setLastInitialMonth(initialMonth);
    if (!selectedDate && initialMonth) setViewDate(initialMonth);
  }

  if (valueKey !== lastValue) {
    setLastValue(valueKey);
    const typed = parseTypedDate(text);
    if ((typed ? toDateKey(typed) : '') !== valueKey) setText(formatTypedDate(valueKey));
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
    setText(formatTypedDate(toDateKey(date)));
    setOpen(false);
  };

  const type = (raw: string) => {
    const masked = maskDate(raw);
    setText(masked);
    const typed = parseTypedDate(masked);
    const accepted = typed && !isDateDisabled?.(typed) ? typed : null;
    field.onChange(accepted ? toDateKey(accepted) : '');
    if (accepted) setViewDate(accepted);
  };

  const restoreText = () => {
    setText(formatTypedDate(valueKey));
    field.onBlur();
  };

  const years = Array.from({ length: YEARS_PER_PAGE }, (_, index) => pageStart + index);

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={fieldState.error?.message}>
      <Wrapper ref={ref}>
        <DateField
          ref={field.ref}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={placeholder}
          aria-invalid={!!fieldState.error}
          value={text}
          onChange={(event) => type(event.target.value)}
          onBlur={restoreText}
        />
        <CalendarButton type="button" aria-label="Abrir calendário" aria-expanded={open} onClick={toggle}>
          <Calendar size={18} />
        </CalendarButton>

        {open && fullScreen && <ScrollLock />}

        {open && view === 'days' && (
          <Panel>
            <FullScreenBar>
              <HeaderLabel>{label}</HeaderLabel>
              <NavButton type="button" onClick={() => setOpen(false)} aria-label="Fechar calendário">
                <X size={20} />
              </NavButton>
            </FullScreenBar>
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
            <FullScreenBar>
              <HeaderLabel>{label}</HeaderLabel>
              <NavButton type="button" onClick={() => setOpen(false)} aria-label="Fechar calendário">
                <X size={20} />
              </NavButton>
            </FullScreenBar>
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
            <FullScreenBar>
              <HeaderLabel>{label}</HeaderLabel>
              <NavButton type="button" onClick={() => setOpen(false)} aria-label="Fechar calendário">
                <X size={20} />
              </NavButton>
            </FullScreenBar>
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
