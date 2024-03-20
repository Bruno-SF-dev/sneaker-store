import { Skeleton } from '@/components/skeletons/skeleton';

export default function GridLoading() {
  return (
    <div className="grid grid-cols-4 gap-6 h-full">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Skeleton className="h-[420px]" key={idx} />
      ))}
    </div>
  );
}
