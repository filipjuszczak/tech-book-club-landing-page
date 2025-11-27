import { cn } from '@/lib/utils';
import { StarIcon } from './icons/star-icon';

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn('flex', className)}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </div>
  );
}
