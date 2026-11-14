// Libs
import { describe, expect, it } from 'vitest';
// Local
import { formatTypedDate, parseTypedDate } from '../../src/utils/dates';

describe('parseTypedDate', () => {
  it('reads a complete, real date', () => {
    expect(parseTypedDate('06/01/1978')?.getFullYear()).toBe(1978);
    expect(parseTypedDate('06/01/1978')?.getMonth()).toBe(0);
  });

  it('rejects incomplete and impossible dates', () => {
    expect(parseTypedDate('06/01/19')).toBeNull();
    expect(parseTypedDate('31/02/2020')).toBeNull();
    expect(parseTypedDate('00/10/2020')).toBeNull();
    expect(parseTypedDate('10/13/2020')).toBeNull();
  });
});

describe('formatTypedDate', () => {
  it('formats a date key as dd/mm/yyyy', () => {
    expect(formatTypedDate('1978-01-06')).toBe('06/01/1978');
    expect(formatTypedDate('')).toBe('');
    expect(formatTypedDate(undefined)).toBe('');
  });
});
