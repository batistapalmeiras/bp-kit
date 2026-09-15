export type SearchInputSize = 'sm' | 'md';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Matches Button's 'sm' (36px) and RawSelect's 'sm' height, for rows
   * pairing a search field with a compact button or select. Defaults to
   * 'md' (40px), the original size. */
  size?: SearchInputSize;
}
