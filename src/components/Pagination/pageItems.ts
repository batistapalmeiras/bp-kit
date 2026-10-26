export type PageItem = number | 'gap';

export function getPageItems(currentPage: number, totalPages: number): PageItem[] {
  const visible = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  if (currentPage <= 3) [1, 2, 3].forEach((page) => visible.add(page));
  if (currentPage >= totalPages - 2) [totalPages - 2, totalPages - 1, totalPages].forEach((page) => visible.add(page));

  const pages = Array.from(visible)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const items: PageItem[] = [];
  let previous = 0;
  for (const page of pages) {
    if (page - previous === 2) items.push(previous + 1);
    else if (page - previous > 2) items.push('gap');
    items.push(page);
    previous = page;
  }
  return items;
}
