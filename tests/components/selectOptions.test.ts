import { createElement, Fragment } from 'react';
import { describe, expect, it } from 'vitest';
import { filterOptions, optionsFromChildren, pinnedFirst } from '../../src/components/Inputs/Select/options';

const option = (value: string, label: string) => createElement('option', { key: value, value }, label);

describe('optionsFromChildren', () => {
  it('reads the options, including the ones inside fragments', () => {
    const children = [
      option('', 'Selecione…'),
      createElement(Fragment, { key: 'group' }, [option('a', 'Ana'), option('b', 'Bruno')]),
    ];
    expect(optionsFromChildren(children)).toEqual([
      { value: '', label: 'Selecione…' },
      { value: 'a', label: 'Ana' },
      { value: 'b', label: 'Bruno' },
    ]);
  });
});

describe('filterOptions', () => {
  const options = [
    { value: '1', label: 'João Araújo' },
    { value: '2', label: 'Maria Souza' },
  ];

  it('matches any part of the label ignoring accents and case', () => {
    expect(filterOptions(options, 'arauj')).toEqual([options[0]]);
    expect(filterOptions(options, 'JOAO')).toEqual([options[0]]);
  });

  it('keeps every option when the search is empty', () => {
    expect(filterOptions(options, '  ')).toEqual(options);
  });
});

describe('pinnedFirst', () => {
  it('moves the pinned options to the top, keeping the order of the rest', () => {
    const options = [
      { value: 'a', label: 'Ana' },
      { value: 'b', label: 'Bruno' },
      { value: 'c', label: 'Carla' },
      { value: 'd', label: 'Davi' },
    ];
    expect(pinnedFirst(options, ['d', 'b']).map((option) => option.value)).toEqual(['b', 'd', 'a', 'c']);
    expect(pinnedFirst(options, [])).toEqual(options);
  });
});
