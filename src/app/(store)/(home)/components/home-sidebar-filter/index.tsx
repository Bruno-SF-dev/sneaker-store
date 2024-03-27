import { FilterHeader } from './filter-header';
import { FilterSection } from './filter-section';

export function HomeSideFilter() {
  return (
    <div className="relative pr-2 py-2 rounded-md border bg-zinc-900/30 border-zinc-800/20">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.03]"></div>

      <div className="relative max-h-sidebar-filter px-4 pb-8 flex flex-col gap-6 overflow-y-auto scrollbar-webkit">
        <FilterHeader />

        <FilterSection />
      </div>
    </div>
  );
}
