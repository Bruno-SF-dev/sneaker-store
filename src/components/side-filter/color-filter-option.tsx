'use client';

import { OptionValue } from '@/helpers/types/filters';
import { VariantProps } from 'class-variance-authority';
import { CheckboxColor, checkboxColorVariants } from '../ui/checkbox-color';

export function ColorFilterOption({
  value,
  isChecked,
  handleToggle,
  className,
  variant,
}: {
  value: OptionValue;
  isChecked: boolean;
  handleToggle: () => void;
  className?: string;
} & VariantProps<typeof checkboxColorVariants>) {
  return (
    <CheckboxColor
      id={value}
      onClick={handleToggle}
      value={value}
      checked={isChecked}
      className={className}
      variant={variant}
    />
  );
}
