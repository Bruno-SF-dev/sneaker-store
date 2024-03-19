import { filters } from '@/helpers/filters';
import { SlidersHorizontal } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

export function SideFilter() {
  return (
    <div className="relative rounded-md pt-3 pb-9 px-4 border border-zinc-800/20 bg-zinc-900/30">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.025]"></div>

      <div className="relative flex items-center gap-2">
        <SlidersHorizontal size={18} />
        <span>Filtros</span>
      </div>

      <div className="relative mt-6 flex flex-col gap-6">
        {filters.map((filter) => (
          <div key={filter.name} className="group">
            <span className="text-sm font-semibold uppercase">
              {filter.name}
            </span>

            <div className="mt-4 space-y-2">
              {filter.options.map((option) => (
                <div key={option} className="flex items-center gap-3 dark">
                  <Checkbox id={option} />
                  <label
                    htmlFor={option}
                    className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {filter.translateOption(option)}
                  </label>
                </div>
              ))}
            </div>

            <div className="group-last:hidden h-px mt-6 bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.1]" />
          </div>
        ))}
      </div>
    </div>
  );
}
