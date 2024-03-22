'use client';

import { filters } from '@/helpers/filters';
import { FilterGroup } from './filter-group';

export function FilterSection() {
  return (
    <div className="flex flex-col gap-6">
      {filters.map((filter) => (
        <FilterGroup key={filter.id} filter={filter} />
      ))}
    </div>
  );
}
