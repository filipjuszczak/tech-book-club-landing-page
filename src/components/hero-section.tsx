import Image from 'next/image';

import { SocialProof } from './social-proof';
import { ArrowDownIcon } from './icons/arrow-down-icon';
import heroImgDesktop from '@/../public/img/image-hero-desktop.webp';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section
      className="grid xl:grid-cols-2 items-center gap-16"
      aria-labelledby="hero-heading"
    >
      <div>
        <h1
          id="hero-heading"
          className="text-preset-1 text-gradient text-balance pb-6"
        >
          Join the ultimate tech book club
        </h1>
        <p className="text-preset-5-regular text-neutral-700 pb-8">
          Turn your reading time into learning time with fellow tech
          enthusiasts. Get curated recommendations, join vibrant discussions,
          and level up your skills one chapter at a time.
        </p>
        <Button asChild className="max-w-fit mb-5">
          <a
            href="#membership-options-section"
            aria-label="Review membership options (scrolls to membership section)"
          >
            Review membership options
            <ArrowDownIcon className="fill-neutral-900" />
          </a>
        </Button>
        <SocialProof />
      </div>
      <Image
        src={heroImgDesktop}
        alt="A diverse group of young tech professionals studying together around a table, surrounded by bookshelves in a modern learning environment"
        sizes="(max-width: 1280px) 100vw, 33vw"
        preload={true}
        className="rounded-xl"
      />
    </section>
  );
}
