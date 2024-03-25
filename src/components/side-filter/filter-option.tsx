'use client';

import { OptionValue } from '@/helpers/types/filters';
import { Checkbox } from '../ui/checkbox';

export function FilterOption({
  value,
  label,
  isChecked,
  handleToggle,
}: {
  value: OptionValue;
  label: string;
  isChecked: boolean;
  handleToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={value}
        onClick={handleToggle}
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
