import { useSearchParams } from 'next/navigation';
import { useSearchQueries } from './search-queries-hook';

export function useSort() {
  const searchParams = useSearchParams();
  const sortQueryValue = searchParams.get('sort');
  const { navigateWithQuery } = useSearchQueries();

  const navigateToSort = (sort: string) => navigateWithQuery({ sort });

  return { navigateToSort, sortQueryValue };
}
