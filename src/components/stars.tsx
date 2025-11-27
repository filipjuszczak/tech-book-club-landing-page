import { cn } from '@/lib/utils';
import { StarIcon } from './icons/star-icon';

export function Stars({ className }: { className?: string }) {
  const starCount = 5;

  return (
    <figure className={cn('flex', className)}>
      {Array.from({ length: starCount }).map((_, index) => (
        <StarIcon key={index} />
      ))}
      <figcaption className="sr-only">{starCount} out of 5 stars</figcaption>
    </figure>
  );
}
