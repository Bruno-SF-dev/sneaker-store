import { Filters } from '@/helpers/filters/@types/filters';
import { useFilterGroup } from '@/hooks/filter-group-hook';
import { CheckboxFilterOption } from './checkbox-filter-option';

export function CheckboxFilterGroup({ filter }: { filter: Filters }) {
  const { isChecked, handleToggleFilter } = useFilterGroup({
    filterId: filter.id,
  });

  return (
    <div key={filter.name} className="group flex flex-col">
      <span className="text-sm font-semibold uppercase">{filter.name}</span>

      <div className="mt-4 space-y-2">
        {filter.options.map(({ value, label }) => (
          <CheckboxFilterOption
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
