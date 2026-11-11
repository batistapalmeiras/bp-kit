// React
import { Children, Fragment, isValidElement, ReactNode } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

const textOf = (node: ReactNode): string =>
  Children.toArray(node)
    .map((child) => (typeof child === 'string' || typeof child === 'number' ? String(child) : ''))
    .join('');

export function optionsFromChildren(children: ReactNode): SelectOption[] {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement<{ value?: unknown; children?: ReactNode }>(child)) return [];
    if (child.type === Fragment) return optionsFromChildren(child.props.children);
    if (child.type !== 'option') return [];
    return [{ value: String(child.props.value ?? ''), label: textOf(child.props.children) }];
  });
}

const searchable = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

export function filterOptions(options: SelectOption[], query: string): SelectOption[] {
  const needle = searchable(query);
  return needle ? options.filter((option) => searchable(option.label).includes(needle)) : options;
}

export function pinnedFirst(options: SelectOption[], pinned: string[]): SelectOption[] {
  return [
    ...options.filter((option) => pinned.includes(option.value)),
    ...options.filter((option) => !pinned.includes(option.value)),
  ];
}
