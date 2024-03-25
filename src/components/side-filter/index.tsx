import { SideFilterHeader } from './components/side-filter-header/inde';
import { FilterSection } from './filter-section';

export function SideFilter() {
  return (
    <div className="relative rounded-md pt-3 pb-9 px-4 border border-zinc-800/20 bg-zinc-900/30">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-sky-400 to-zinc-500 opacity-[0.03]"></div>

      <SideFilterHeader />

      <div className="relative mt-6">
        <FilterSection />
      </div>
    </div>
  );
}
