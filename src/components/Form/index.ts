// Libs
import styled from 'styled-components';

// A form left-aligned inside a wide desktop/tablet content column reads as
// lopsided once a consumer caps it with max-width — the rest of the column
// just sits empty on the right. Centering it here means every existing and
// future max-width override (each page sets its own) gets balanced
// whitespace on both sides for free, no per-page change needed. Harmless
// where no max-width is set (e.g. inside an already-narrow drawer): a
// full-width block ignores auto margins.
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: auto;
    margin-right: auto;
  }
`;
