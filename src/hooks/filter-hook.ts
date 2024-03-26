import { useRouter, useSearchParams } from 'next/navigation';

const queriesName = ['category', 'brand', 'gender', 'sort'];

export function useFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasFilter = queriesName.some((filterQuery) =>
    searchParams.has(filterQuery)
  );

  const handleRemoveAllFilter = () => {
    router.push('/');
  };

  return {
    hasFilter,
    handleRemoveAllFilter,
  };
}
