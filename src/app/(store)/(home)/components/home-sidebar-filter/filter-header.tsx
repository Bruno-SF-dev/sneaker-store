'use client';

import { Button } from '@/components/ui/button';
import { useFilter } from '@/hooks/filter-hook';
import { SlidersHorizontal } from 'lucide-react';

export function FilterHeader() {
  const { hasFilter, handleRemoveAllFilter } = useFilter();

  return (
    <div className="min-h-12 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={18} />
        <span>Filtros</span>
      </div>

      {hasFilter && (
        <Button size="sm" variant="underline" onClick={handleRemoveAllFilter}>
          Limpar Filtro
        </Button>
      )}
    </div>
  );
}
