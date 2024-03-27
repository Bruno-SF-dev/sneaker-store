'use client';

import { checkboxFilters, colorFilters } from '@/helpers/filters';
import { CheckboxFilterGroup } from './checkbox-filter/checkbox-filter-group';
import { ColorFilterGroup } from './color-filter/color-filter-group';

export function FilterSection() {
  return (
    <div className="flex flex-col gap-6">
      {checkboxFilters.map((filter) => (
        <CheckboxFilterGroup key={filter.id} filter={filter} />
      ))}

      {colorFilters.map((filter) => (
        <ColorFilterGroup key={filter.id} filter={filter} />
      ))}
    </div>
  );
}
