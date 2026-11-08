export function onlyDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatCurrency(value: number | string): string {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(num)) return '0,00';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
}

export function parseCurrency(value: string): number {
  const digits = onlyDigits(value);
  return digits ? parseInt(digits, 10) / 100 : 0;
}

export function maskCurrencyInput(value: string): string {
  const digits = onlyDigits(value);
  return digits ? formatCurrency(parseInt(digits, 10) / 100).replace('R$ ', '') : '';
}

export function maskPhone(value: string): string {
  const digits = onlyDigits(value);

  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function isCompletePhone(value: string): boolean {
  return [10, 11].includes(onlyDigits(value).length);
}

export function isSamePhone(a: string, b: string): boolean {
  const digits = onlyDigits(a);
  return digits !== '' && digits === onlyDigits(b);
}

export function formatCPF(value: string): string {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function cpfCheckDigit(digits: number[], weight: number): number {
  const sum = digits.reduce((total, digit, index) => total + digit * (weight - index), 0);
  const rest = (sum * 10) % 11;
  return rest === 10 ? 0 : rest;
}

export function isValidCpf(value: string): boolean {
  const digits = onlyDigits(value).split('').map(Number);
  if (digits.length !== 11 || digits.every((digit) => digit === digits[0])) return false;
  return cpfCheckDigit(digits.slice(0, 9), 10) === digits[9] && cpfCheckDigit(digits.slice(0, 10), 11) === digits[10];
}

export function maskCEP(value: string): string {
  const digits = onlyDigits(value).slice(0, 8);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

export function maskDate(value: string): string {
  const digits = onlyDigits(value).slice(0, 8);
  if (digits.length > 4) return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
