import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationUi,
} from '@/components/ui/pagination';

interface PaginationProps {
  pages: {
    href: string;
    label: string;
    isActive: boolean;
  }[];
  prevPage: number;
  nextPage: number;
}

export function Pagination({ pages, prevPage, nextPage }: PaginationProps) {
  return (
    <PaginationUi className="relative">
      <PaginationContent>
        {prevPage && (
          <PaginationItem>
            <PaginationPrevious href="#" size="sm" />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page.label}>
            <PaginationLink href={page.href} isActive={page.isActive} size="sm">
              {page.label}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}

        {nextPage && (
          <PaginationItem>
            <PaginationNext href="#" size="sm" />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationUi>
  );
}
