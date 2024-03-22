'use client';

import { FilterId, OptionValue } from '@/helpers/types/filters';
import { useRouter, useSearchParams } from 'next/navigation';
import { MouseEvent } from 'react';
import { Checkbox } from '../ui/checkbox';

export function FilterOption({
  value,
  label,
  filterId,
}: {
  value: OptionValue;
  label: string;
  filterId: FilterId;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryValues = searchParams.get(filterId)?.split(',') || [];

  const isChecked = queryValues?.includes(value);

  const handleAddFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const newQueryValue = e.currentTarget.value;
    const prevQueryValue = searchParams.get(filterId);
    const updateQueryValue = prevQueryValue
      ? [prevQueryValue, newQueryValue].join(',')
      : newQueryValue;

    const prevSearchParams = searchParams.toString();
    const params = new URLSearchParams(prevSearchParams);

    params.set(filterId, updateQueryValue);

    const newSearchParams = params.toString();

    router.push(`/?${newSearchParams}`);
  };

  const handleRemoveFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const queryValueToRemove = e.currentTarget.value;
    const prevQueryValue = searchParams.get(filterId);
    const updateQueryValue = prevQueryValue
      ?.split(',')
      .filter((value) => value !== queryValueToRemove)
      .join(',');

    const prevSearchParams = searchParams.toString();
    const params = new URLSearchParams(prevSearchParams);

    if (!!updateQueryValue) {
      params.set(filterId, updateQueryValue);
    } else {
      params.delete(filterId);
    }

    const newSearchParams = params.toString();

    router.push(`/?${newSearchParams}`);
  };

  return (
    <div className="flex items-center gap-3 dark">
      <Checkbox
        id={value}
        onClick={
          isChecked ? (e) => handleRemoveFilter(e) : (e) => handleAddFilter(e)
        }
        value={value}
        checked={isChecked}
      />
      <label
        htmlFor={value}
        className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
