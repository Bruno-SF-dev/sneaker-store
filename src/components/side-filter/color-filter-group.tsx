import { ColorFilters } from '@/helpers/types/filters';
import { useFilterGroup } from '@/hooks/filter-group-hook';
import { ColorFilterOption } from './color-filter-option';

export function ColorFilterGroup({ filter }: { filter: ColorFilters }) {
  const { isChecked, handleToggleFilter } = useFilterGroup({
    filterId: filter.id,
  });

  return (
    <div key={filter.name} className="group flex flex-col">
      <span className="text-sm font-semibold uppercase">{filter.name}</span>

      <div className="self-start mt-4 grid grid-cols-5 gap-3">
        {filter.options.map(({ value }) => (
          <ColorFilterOption
            key={value}
            value={value}
            handleToggle={() => handleToggleFilter(value)}
            isChecked={isChecked(value)}
            className="size-5"
            variant={value}
          />
        ))}
      </div>

      <div className="group-last:hidden h-px mt-6 bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />
    </div>
  );
}
