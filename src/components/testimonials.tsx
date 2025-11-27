import { StarIcon } from './icons/star-icon';

type Testimonial = {
  id: string;
  text: string;
  name: string;
  role: string;
  rating: number;
};

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 't-1',
      text: 'This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!',
      name: 'Sarah Chen',
      role: 'Software Architect',
      rating: 5
    }
  ];

  return (
    <section className="mb-16 md:mb-20 xl:mb-32 xl:px-24">
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.id} {...testimonial} />
      ))}
    </section>
  );
}

function Testimonial({ name, role, text, rating }: Omit<Testimonial, 'id'>) {
  return (
    <article className="flex flex-col gap-8 items-center">
      <Rating rating={rating} />
      <blockquote
        className="xl:text-center"
        aria-label={`Testimonial by ${name}, ${role}`}
      >
        <p className="text-preset-3 text-neutral-900 pb-8">
          &quot;{text}&quot;
        </p>
        <footer className="text-preset-5-regular text-neutral-700">
          <cite className="not-italic">{name}</cite>
          <span>, {role}</span>
        </footer>
      </blockquote>
    </article>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <figure className="flex">
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} />
      ))}
      <figcaption className="sr-only">{rating} out of 5 stars</figcaption>
    </figure>
  );
}
