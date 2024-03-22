import { SlidersHorizontal } from 'lucide-react';
import { FilterGroup } from './filter-group';

export function SideFilter() {
  return (
    <div className="relative rounded-md pt-3 pb-9 px-4 border border-zinc-800/20 bg-zinc-900/30">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.025]"></div>

      <div className="relative flex items-center gap-2">
        <SlidersHorizontal size={18} />
        <span>Filtros</span>
      </div>

      <div className="relative mt-6 flex flex-col gap-6">
        <FilterGroup />
      </div>
    </div>
  );
}
