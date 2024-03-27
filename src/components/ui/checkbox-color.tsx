'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const checkboxColorVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-full border-0 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        white:
          'bg-zinc-50 data-[state=checked]:ring data-[state=checked]:ring-zinc-50/50',
        black:
          'bg-gray-950 data-[state=checked]:ring data-[state=checked]:ring-gray-950/50',
        red: 'bg-red-500 data-[state=checked]:ring data-[state=checked]:ring-red-500/50',
        blue: 'bg-blue-600 data-[state=checked]:ring data-[state=checked]:ring-blue-600/50',
        brown:
          'bg-amber-950 data-[state=checked]:ring data-[state=checked]:ring-amber-950/50',
        green:
          'bg-green-600 data-[state=checked]:ring data-[state=checked]:ring-green-600/50',
        pink: 'bg-pink-500 data-[state=checked]:ring data-[state=checked]:ring-pink-500/50',
        purple:
          'bg-purple-600 data-[state=checked]:ring data-[state=checked]:ring-purple-600/50',
        cream:
          'bg-amber-100 data-[state=checked]:ring data-[state=checked]:ring-amber-100/50',
        'multi-color':
          'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 data-[state=checked]:ring data-[state=checked]:ring-purple-500/50',
        orange:
          'bg-orange-600 data-[state=checked]:ring data-[state=checked]:ring-orange-600/50',
        grey: 'bg-gray-600 data-[state=checked]:ring data-[state=checked]:ring-gray-600/50',
        tan: 'bg-orange-200 data-[state=checked]:ring data-[state=checked]:ring-orange-200/50',
        yellow:
          'bg-yellow-300 data-[state=checked]:ring data-[state=checked]:ring-yellow-300/50',
      },
    },
    defaultVariants: {
      variant: 'multi-color',
    },
  }
);

const CheckboxColor = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxColorVariants>
>(({ className, variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkboxColorVariants({ variant, className }))}
    {...props}
  />
));
CheckboxColor.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxColor };
