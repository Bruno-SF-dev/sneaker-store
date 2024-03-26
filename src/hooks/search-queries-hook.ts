import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type QueriesType = { [key: string]: string | number };

export function useSearchQueries() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const generateSearchQueriesURL = useCallback(
    (queries: QueriesType) => {
      const params = new URLSearchParams(searchParams);

      Object.entries(queries).forEach(([key, value]) => {
        params.set(`${key}`, `${value}`);
      });

      return `?${params.toString()}`;
    },
    [searchParams]
  );

  const navigateWithQuery = useCallback(
    (queries: QueriesType) => router.push(generateSearchQueriesURL(queries)),
    [generateSearchQueriesURL, router]
  );

  return {
    generateSearchQueriesURL,
    navigateWithQuery,
  };
}
