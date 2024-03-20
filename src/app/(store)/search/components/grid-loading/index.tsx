import { Skeleton } from '@/components/skeletons/skeleton';

export default function GridLoading() {
  return (
    <div className="grid grid-cols-5 gap-6">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Skeleton className="h-[420px]" key={idx} />
      ))}
    </div>
  );
}
