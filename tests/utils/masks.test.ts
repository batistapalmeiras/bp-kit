import { describe, expect, it } from 'vitest';
import {
  formatCPF,
  isCompletePhone,
  isSamePhone,
  isValidCpf,
  maskCEP,
  maskDate,
  maskPhone,
  onlyDigits,
  parseCurrency,
} from '../../src/utils/masks';

describe('onlyDigits', () => {
  it('keeps digits and drops everything else', () => {
    expect(onlyDigits('(31) 99999-8888')).toBe('31999998888');
    expect(onlyDigits('abc')).toBe('');
  });
});

describe('maskPhone', () => {
  it('formats landlines and mobiles as they are typed', () => {
    expect(maskPhone('31')).toBe('(31');
    expect(maskPhone('3133334')).toBe('(31) 33334');
    expect(maskPhone('3133334444')).toBe('(31) 3333-4444');
    expect(maskPhone('31999998888')).toBe('(31) 99999-8888');
  });
});

describe('phone rules', () => {
  it('accepts landlines and mobiles with area code, whatever the formatting', () => {
    expect(isCompletePhone('(31) 3333-4444')).toBe(true);
    expect(isCompletePhone('31 99999-8888')).toBe(true);
    expect(isCompletePhone('99999-8888')).toBe(false);
  });

  it('compares numbers by their digits only', () => {
    expect(isSamePhone('(31) 99999-8888', '31999998888')).toBe(true);
    expect(isSamePhone('(31) 99999-8888', '(31) 3333-4444')).toBe(false);
    expect(isSamePhone('', '')).toBe(false);
  });
});

describe('CPF', () => {
  it('formats the digits with dots and dash', () => {
    expect(formatCPF('52998224725')).toBe('529.982.247-25');
  });

  it('accepts a valid CPF with or without punctuation', () => {
    expect(isValidCpf('529.982.247-25')).toBe(true);
    expect(isValidCpf('52998224725')).toBe(true);
  });

  it('rejects wrong check digits, repeated digits and incomplete numbers', () => {
    expect(isValidCpf('529.982.247-24')).toBe(false);
    expect(isValidCpf('111.111.111-11')).toBe(false);
    expect(isValidCpf('529.982.247')).toBe(false);
  });
});

describe('other masks', () => {
  it('formats CEP, typed dates and currency input', () => {
    expect(maskCEP('30130000')).toBe('30130-000');
    expect(maskDate('07031990')).toBe('07/03/1990');
    expect(parseCurrency('R$ 1.234,56')).toBe(1234.56);
  });
});
