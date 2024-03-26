import { useRouter, useSearchParams } from 'next/navigation';

const filtersQuery = ['category', 'brand', 'gender'];

export function useFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasFilter = filtersQuery.some((filterQuery) =>
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
