import { Filters } from '@/helpers/types/filters';
import { useFilterGroup } from '@/hooks/filter-group-hook';
import { FilterOption } from './filter-option';

export function FilterGroup({ filter }: { filter: Filters }) {
  const { isChecked, handleToggleFilter } = useFilterGroup({
    filterId: filter.id,
  });

  return (
    <div key={filter.name} className="group">
      <span className="text-sm font-semibold uppercase">{filter.name}</span>

      <div className="mt-4 space-y-2">
        {filter.options.map(({ value, label }) => (
          <FilterOption
            key={value}
            value={value}
            label={label}
            handleToggle={() => handleToggleFilter(value)}
            isChecked={isChecked(value)}
          />
        ))}
      </div>

      <div className="group-last:hidden h-px mt-6 bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />
    </div>
  );
}
