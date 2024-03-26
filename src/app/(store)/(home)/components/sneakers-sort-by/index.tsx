'use client';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { sortingOptions } from '@/helpers/sorting-options';
import { useSort } from '@/hooks/sort-hook';

import { ChevronDown } from 'lucide-react';

export function SneakersSortBy() {
  const { navigateToSort, sortQueryValue } = useSort();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-2 py-1">
        Ordernar por
        <ChevronDown size={16} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="dark min-w-[160px]">
        {sortingOptions.map(({ label, value }) => (
          <DropdownMenuCheckboxItem
            key={value}
            checked={sortQueryValue === value}
            onClick={() => navigateToSort(value)}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}