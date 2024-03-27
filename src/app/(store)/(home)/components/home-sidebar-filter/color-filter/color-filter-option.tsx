'use client';

import {
  CheckboxColor,
  checkboxColorVariants,
} from '@/components/ui/checkbox-color';
import { OptionValue } from '@/helpers/filters/@types/filters';
import { VariantProps } from 'class-variance-authority';

export function ColorFilterOption({
  value,
  isChecked,
  handleToggle,
  variant,
}: {
  value: OptionValue;
  isChecked: boolean;
  handleToggle: () => void;
} & VariantProps<typeof checkboxColorVariants>) {
  return (
    <CheckboxColor
      id={value}
      onClick={handleToggle}
      value={value}
      checked={isChecked}
      variant={variant}
      className="size-5"
    />
  );
}
