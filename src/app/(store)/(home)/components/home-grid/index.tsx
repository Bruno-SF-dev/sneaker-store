'use client';

import { useHomeLayout } from '@/contexts/home-layout-context';
import { ReactNode } from 'react';

export function HomeGrid({ children }: { children: ReactNode }) {
  const { itemsPerRow } = useHomeLayout();

  const gridCols: { [key: number]: string } = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 ${gridCols[itemsPerRow]}`}
    >
      {children}
    </div>
  );
}
