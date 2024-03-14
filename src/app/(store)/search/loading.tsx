import { Skeleton } from '@/components/skeleton';
import { Suspense } from 'react';
import { SearchText } from './components/search-text';

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense>
        <SearchText />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}
