'use client';

import { filters } from '@/helpers/filters';
import { FilterOption } from './filter-option';

export function FilterGroup() {
  return (
    <>
      {filters.map((filter) => (
        <div key={filter.name} className="group">
          <span className="text-sm font-semibold uppercase">{filter.name}</span>

          <div className="mt-4 space-y-2">
            {filter.options.map(({ value, label }) => (
              <FilterOption
                value={value}
                label={label}
                filterId={filter.id}
                key={value}
              />
            ))}
          </div>

          <div className="group-last:hidden h-px mt-6 bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />
        </div>
      ))}
    </>
  );
}
