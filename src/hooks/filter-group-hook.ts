import { FilterId, OptionValue } from '@/helpers/filters/@types/filters';
import { useRouter, useSearchParams } from 'next/navigation';

export function useFilterGroup({ filterId }: { filterId: FilterId }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryValues = searchParams.get(filterId)?.split(',') || [];

  const isChecked = (value: string) => queryValues?.includes(value);

  const handleAddFilter = (optionValue: OptionValue) => {
    const newQueryValue = optionValue;
    const prevQueryValue = searchParams.get(filterId);
    const updateQueryValue = prevQueryValue
      ? [prevQueryValue, newQueryValue].join(',')
      : newQueryValue;

    const params = new URLSearchParams(searchParams);

    params.set(filterId, updateQueryValue);
    params.delete('page');

    const newSearchParams = params.toString();

    router.push(`/?${newSearchParams}`);
  };

  const handleRemoveFilter = (optionValue: OptionValue) => {
    const queryValueToRemove = optionValue;
    const prevQueryValue = searchParams.get(filterId);
    const updateQueryValue = prevQueryValue
      ?.split(',')
      .filter((value) => value !== queryValueToRemove)
      .join(',');

    const params = new URLSearchParams(searchParams);

    if (!!updateQueryValue) {
      params.set(filterId, updateQueryValue);
    } else {
      params.delete(filterId);
    }

    params.delete('page');

    const newSearchParams = params.toString();

    router.push(`/?${newSearchParams}`);
  };

  const handleRemoveAllFilter = () => {
    router.push('/');
  };

  const handleToggleFilter = (value: OptionValue) => {
    if (isChecked(value)) {
      return handleRemoveFilter(value);
    }

    return handleAddFilter(value);
  };

  return {
    isChecked,
    handleToggleFilter,
    handleRemoveAllFilter,
  };
}
