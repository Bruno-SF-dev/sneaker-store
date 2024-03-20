'use client';

import { useHomeLayout } from '@/contexts/home-layout-context';
import { ReactNode } from 'react';

export function Grid({ children }: { children: ReactNode }) {
  const { itemsPerRow } = useHomeLayout();

  const gridCols: { [key: number]: string } = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid gap-6 ${gridCols[itemsPerRow]}`}>{children}</div>
  );
}
