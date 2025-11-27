import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center gap-4 text-preset-6 px-6 py-5.5 rounded-lg border-2 uppercase xs:whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3',
  {
    variants: {
      variant: {
        light:
          'bg-light-salmon-50 border-neutral-900 hover:bg-linear-to-r hover:from-light-salmon-100 hover:to-light-salmon-50 focus-visible:bg-linear-to-r focus-visible:from-light-salmon-100 focus-visible:to-light-salmon-50 focus-visible:outline-neutral-700',
        dark: 'bg-neutral-900 border-white hover:bg-linear-to-r hover:from-neutral-700 hover:to-neutral-900 focus-visible:bg-linear-to-r focus-visible:from-neutral-700 focus-visible:to-neutral-900 focus-visible:outline-white'
      }
    },
    defaultVariants: {
      variant: 'light'
    }
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      style={{
        color:
          variant === 'dark' ? 'var(--color-white)' : 'var(--color-neutral-900)'
      }}
      {...props}
    />
  );
}

export { Button, buttonVariants };
