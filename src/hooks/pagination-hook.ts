import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

interface UsePaginationProps {
  pagination: {
    currentPage: number;
    nextPage: number;
    prevPage: number;
    totalPages: number;
  };
}

export function usePagination({
  pagination: { currentPage, nextPage, prevPage, totalPages },
}: UsePaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const generatePageURL = useCallback(
    (page: number) => {
      const currentURL = new URLSearchParams(searchParams);
      currentURL.set('page', String(page));
      return `?${currentURL.toString()}`;
    },
    [searchParams]
  );

  const navigateToPage = useCallback(
    (page: number) => router.push(generatePageURL(page)),
    [generatePageURL, router]
  );

  const paginationsLinks = useMemo(
    () =>
      Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;

        return {
          page,
          isActive: page === currentPage,
        };
      }),
    [currentPage, , totalPages]
  );

  const itemsToRender = useMemo(
    () => paginationsLinks.slice(Math.max(0, currentPage - 2), currentPage + 1),
    [paginationsLinks, currentPage]
  );

  const haveMoreItems = useMemo(
    () => itemsToRender[itemsToRender.length - 1]?.page < totalPages,
    [itemsToRender, totalPages]
  );

  return {
    paginationsItems: itemsToRender,
    nextPage: nextPage ? generatePageURL(nextPage) : null,
    prevPage: prevPage ? generatePageURL(prevPage) : null,
    currentPage,
    totalPages,
    haveMoreItems,
    navigateToPage,
  };
}
