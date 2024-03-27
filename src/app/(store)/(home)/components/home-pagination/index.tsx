'use client';

import { Button } from '@/components/ui/button';
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  Pagination as PaginationUi,
} from '@/components/ui/pagination';
import { usePagination } from '@/hooks/pagination-hook';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface HomePaginationProps {
  pagination: {
    currentPage: number;
    nextPage: number;
    prevPage: number;
    totalPages: number;
  };
}

export function HomePagination({ pagination }: HomePaginationProps) {
  const {
    paginationsItems,
    nextPage,
    prevPage,
    currentPage,
    totalPages,
    haveMoreItems,
    navigateToPage,
  } = usePagination({
    pagination,
  });

  if (totalPages <= 1) {
    return;
  }

  return (
    <div className="relative p-4">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-sky-500 to-pink-transparent opacity-[0.025]"></div>

      <PaginationUi className="relative dark">
        <PaginationContent>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToPage(1)}
            disabled={!prevPage}
          >
            <ChevronsLeft className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={!prevPage}
          >
            <ChevronLeft className="size-4" />
          </Button>

          {paginationsItems.map((item) => (
            <Button
              key={item.page}
              variant={item.isActive ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigateToPage(item.page)}
            >
              {item.page}
            </Button>
          ))}

          {haveMoreItems && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={!nextPage}
          >
            <ChevronRight className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToPage(totalPages)}
            disabled={!nextPage}
          >
            <ChevronsRight className="size-4" />
          </Button>
        </PaginationContent>
      </PaginationUi>
    </div>
  );
}
