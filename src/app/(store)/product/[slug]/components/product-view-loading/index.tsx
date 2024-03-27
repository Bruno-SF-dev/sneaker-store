import { Skeleton } from '@/components/skeletons/skeleton';

export function ProductViewLoading() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="grid grid-cols-5 gap-12">
        <div className="relative col-span-3 flex flex-col">
          <Skeleton className="h-[620px]" />
        </div>

        <div className="col-span-2 flex flex-col justify-start">
          <Skeleton className="h-[75px]" />
          <Skeleton className="h-[45px] mt-8" />
          <Skeleton className="h-[180px] mt-8" />
          <Skeleton className="h-12 mt-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
