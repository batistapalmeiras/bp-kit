// Libs
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Local
import { getPageItems } from './pageItems';
import { PageButton, PageGap, Wrapper } from './styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <Wrapper role="navigation" aria-label="Paginação">
      <PageButton
        type="button"
        aria-label="Página anterior"
        aria-hidden={isFirst}
        tabIndex={isFirst ? -1 : undefined}
        $hidden={isFirst}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={18} />
      </PageButton>

      {getPageItems(currentPage, totalPages).map((page, index) =>
        page === 'gap' ? (
          <PageGap key={`gap-${index}`} aria-hidden="true">
            …
          </PageGap>
        ) : (
          <PageButton
            key={page}
            type="button"
            $active={page === currentPage}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={`Página ${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ),
      )}

      <PageButton
        type="button"
        aria-label="Próxima página"
        aria-hidden={isLast}
        tabIndex={isLast ? -1 : undefined}
        $hidden={isLast}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight size={18} />
      </PageButton>
    </Wrapper>
  );
}
