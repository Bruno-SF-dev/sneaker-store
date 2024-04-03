import { useMemo } from 'react';
import { useSearchQueries } from './search-queries-hook';

interface UsePaginationProps {
  pagination: {
    currentPage: number;
    nextPage: number;
    prevPage: number;
    totalPages: number;
  };
}

export function usePagination({ pagination }: UsePaginationProps) {
  const { currentPage, nextPage, prevPage, totalPages } = pagination;
  const { navigateWithQuery } = useSearchQueries();

  const navigateToPage = (page: number) => navigateWithQuery({ page });

  const paginationsItems = useMemo(
    () =>
      Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;

        return {
          page,
          isActive: page === currentPage,
        };
      }),
    [currentPage, totalPages]
  );

  const itemsToRender = useMemo(
    () => paginationsItems.slice(Math.max(0, currentPage - 2), currentPage + 1),
    [paginationsItems, currentPage]
  );

  const haveMoreItems = useMemo(
    () => itemsToRender[itemsToRender.length - 1]?.page < totalPages,
    [itemsToRender, totalPages]
  );

  return {
    itemsToRender,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    haveMoreItems,
    navigateToPage,
  };
}
