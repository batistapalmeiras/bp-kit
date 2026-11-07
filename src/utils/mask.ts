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
  const onlyNumbers = value.replace(/\D/g, '');
  if (!onlyNumbers) return 0;
  return parseInt(onlyNumbers, 10) / 100;
}

export function maskCurrencyInput(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '');

  if (!onlyNumbers) return '';

  const num = parseInt(onlyNumbers, 10) / 100;
  return formatCurrency(num).replace('R$ ', '');
}

export function maskPhone(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '');

  if (onlyNumbers.length === 0) return '';
  if (onlyNumbers.length <= 2) return `(${onlyNumbers}`;
  // O traço só entra a partir do 8º dígito: com exatamente 7, um traço
  // pendurado no fim seria recriado pela própria máscara a cada backspace,
  // impedindo o usuário de apagá-lo.
  if (onlyNumbers.length <= 7) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  if (onlyNumbers.length <= 10) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 6)}-${onlyNumbers.slice(6)}`;
  return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
}

export function parsePhone(value: string): string {
  return value.replace(/\D/g, '');
}

export function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function maskCEP(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  return digits.length > 5 ? `${digits.slice(0, 5)}-${digits.slice(5)}` : digits;
}

export function maskDate(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 4) return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
