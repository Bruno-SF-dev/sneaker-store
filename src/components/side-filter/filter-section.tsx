'use client';

import { filterColor, filters } from '@/helpers/filters';
import { ColorFilterGroup } from './color-filter-group';
import { FilterGroup } from './filter-group';

export function FilterSection() {
  return (
    <div className="flex flex-col gap-6">
      {filters.map((filter) => (
        <FilterGroup key={filter.id} filter={filter} />
      ))}

      {filterColor.map((filterColor) => (
        <ColorFilterGroup key={filterColor.id} filter={filterColor} />
      ))}
    </div>
  );
}
