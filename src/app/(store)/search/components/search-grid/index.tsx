'use client';

import { ReactNode } from 'react';

export function SearchGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-5 gap-6">{children}</div>;
}
