'use client';

import { cn } from '@/lib/utils';

type Variant = 'light' | 'dark';

const variants: Record<Variant, string> = {
  light:
    'bg-light-salmon-50 border-neutral-900 hover:bg-linear-to-r hover:from-light-salmon-100 hover:to-light-salmon-50 focus-visible:bg-linear-to-r focus-visible:from-light-salmon-100 focus-visible:to-light-salmon-50 focus-visible:outline-neutral-700',
  dark: 'bg-neutral-900 border-white text-white hover:bg-linear-to-r hover:from-neutral-700 hover:to-neutral-900 focus-visible:bg-linear-to-r focus-visible:from-neutral-700 focus-visible:to-neutral-900 focus-visible:outline-white'
} as const;

export function Button({
  variant = 'light',
  className,
  children,
  icon,
  ...props
}: React.ComponentProps<'button'> & {
  variant?: Variant;
  icon?: React.ReactNode;
}) {
  return (
    <button
      {...props}
      className={cn(
        variants[variant],
        'flex items-center justify-center gap-4 text-preset-6 px-6 py-5.5 rounded-lg border-2 uppercase xs:whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3',
        className
      )}
      style={{
        color:
          variant === 'light'
            ? 'var(--color-neutral-900)'
            : 'var(--color-white)'
      }}
    >
      {children}
      {icon}
    </button>
  );
}
