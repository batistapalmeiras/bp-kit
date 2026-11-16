// React
import { useState } from 'react';
// Libs
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// Components
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useScrollLock } from '../../../hooks/useScrollLock';
import { capitalize, MONTH_NAMES, MONTH_SHORT_NAMES, toDateKey } from '../../../utils/dates';
import { ChoiceCell, ChoiceGrid } from '../_shared/ChoiceGrid';
import { HeaderLabel, NavButton, PanelHeader } from '../_shared/PickerElements';
// Local
import {
  DayCell,
  DayGrid,
  DatePanel,
  FullScreenBar,
  HeaderButton,
  WeekdayLabel,
  WeekdayRow,
} from './styles';

type View = 'days' | 'months' | 'years';

const WEEKDAY_LABELS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
const YEARS_PER_PAGE = 12;

interface Props {
  label: string;
  selected: Date | null;
  isDateDisabled?: (date: Date) => boolean;
  onSelect: (date: Date) => void;
  onClose: () => void;
}

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

const DAYS_TO_SEARCH = 366;

function firstAvailableDate(isDateDisabled?: (date: Date) => boolean): Date {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!isDateDisabled) return start;
  for (let offset = 0; offset < DAYS_TO_SEARCH; offset++) {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + offset);
    if (!isDateDisabled(date)) return date;
  }
  return start;
}

export function CalendarPanel({ label, selected, isDateDisabled, onSelect, onClose }: Props) {
  const [view, setView] = useState<View>('days');
  const [scrolled, setScrolled] = useState(false);
  const [viewDate, setViewDate] = useState(() => selected ?? firstAvailableDate(isDateDisabled));
  const [pageStart, setPageStart] = useState(() => firstYearOfPage(viewDate.getFullYear()));
  const fullScreen = useMediaQuery('(max-width: 744px)');

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();
  const todayKey = toDateKey(new Date());
  const selectedKey = selected ? toDateKey(selected) : null;
  const years = Array.from({ length: YEARS_PER_PAGE }, (_, index) => pageStart + index);

  const openYears = () => {
    setPageStart(firstYearOfPage(viewYear));
    setView('years');
  };

  const bar = (
    <FullScreenBar $scrolled={scrolled}>
      <HeaderLabel>{label}</HeaderLabel>
      <NavButton type="button" onClick={onClose} aria-label="Fechar calendário">
        <X size={20} />
      </NavButton>
    </FullScreenBar>
  );

  return (
    <DatePanel onScroll={(event) => setScrolled(event.currentTarget.scrollTop > 0)}>
      {fullScreen && <ScrollLock />}
      {bar}

      {view === 'days' && (
        <>
          <PanelHeader>
            <NavButton
              type="button"
              onClick={() => setViewDate(new Date(viewYear, viewMonth - 1, 1))}
              aria-label="Mês anterior"
            >
              <ChevronLeft size={18} />
            </NavButton>
            <HeaderButton type="button" onClick={openYears} aria-label="Escolher mês e ano">
              {capitalize(MONTH_NAMES[viewMonth])} de {viewYear}
            </HeaderButton>
            <NavButton
              type="button"
              onClick={() => setViewDate(new Date(viewYear, viewMonth + 1, 1))}
              aria-label="Próximo mês"
            >
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
                  onClick={() => onSelect(date)}
                >
                  {date.getDate()}
                </DayCell>
              ) : (
                <span key={`empty-${index}`} />
              ),
            )}
          </DayGrid>
        </>
      )}

      {view === 'months' && (
        <>
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
                $selected={selected?.getFullYear() === viewYear && selected.getMonth() === month}
                onClick={() => {
                  setViewDate(new Date(viewYear, month, 1));
                  setView('days');
                }}
              >
                {monthLabel}
              </ChoiceCell>
            ))}
          </ChoiceGrid>
        </>
      )}

      {view === 'years' && (
        <>
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
                $selected={selected?.getFullYear() === year}
                onClick={() => {
                  setViewDate(new Date(year, viewMonth, 1));
                  setView('months');
                }}
              >
                {year}
              </ChoiceCell>
            ))}
          </ChoiceGrid>
        </>
      )}
    </DatePanel>
  );
}
