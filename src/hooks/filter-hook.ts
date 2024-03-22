import { useRouter, useSearchParams } from 'next/navigation';

export function useFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const hasFilter = !!searchParamsString;

  const handleRemoveAllFilter = () => {
    router.push('/');
  };

  return {
    hasFilter,
    handleRemoveAllFilter,
  };
}
