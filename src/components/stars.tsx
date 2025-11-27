import { cn } from '@/lib/utils';
import { StarIcon } from './icons/star-icon';

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn('flex', className)} aria-label="5 out of 5 stars">
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
}
