import Image from 'next/image';
import { CheckmarkIcon } from './icons/checkmark-icon';
import benefitsImgDesktop from '@/../public/img/image-read-together-desktop.webp';
import communityImgDesktop from '@/../public/img/image-not-average-desktop.webp';

export function BenefitsSections() {
  return (
    <section
      className="pt-16 space-y-16 xl:space-y-32"
      aria-labelledby="benefits-heading"
    >
      <div className="flex flex-col xl:flex-row-reverse xl:items-center xl:*:w-full gap-10 xl:gap-20">
        <div>
          <h2
            id="benefits-heading"
            className="text-preset-2 text-neutral-900 text-balance mb-6 md:mb-8"
          >
            Read together, grow together
          </h2>
          <Benefits />
        </div>
        <div>
          <Image
            src={benefitsImgDesktop}
            alt="Four people engaged in a book club discussion, sharing books, coffee, and snacks around a cozy table"
            sizes="(max-width: 1280px) 100vw, 33vw"
            preload={true}
            className="rounded-xl"
          />
        </div>
      </div>
      <Community />
    </section>
  );
}

function Benefits() {
  return (
    <ul className="space-y-4 xl:space-y-6 text-preset-5-regular text-neutral-700">
      <li className="flex items-center gap-3.5 text-pretty">
        <CheckmarkIcon size={28} className="shrink-0" />
        <span>Monthly curated tech reads selected by industry experts</span>
      </li>
      <li className="flex items-center gap-3.5 text-pretty">
        <CheckmarkIcon size={28} className="shrink-0" />
        <span>Virtual and in-person meetups for deep-dive discussions</span>
      </li>
      <li className="flex items-center gap-3.5 text-pretty">
        <CheckmarkIcon size={28} className="shrink-0" />
        <span>Early access to new tech book releases</span>
      </li>
      <li className="flex items-center gap-3.5">
        <CheckmarkIcon size={28} className="shrink-0" />
        <span>Author Q&A sessions with tech thought leaders</span>
      </li>
    </ul>
  );
}

function Community() {
  return (
    <div className="community relative flex flex-col items-center xl:flex-row xl:*:w-full gap-10 xl:gap-20">
      <div>
        <h2 className="text-preset-2 text-neutral-900 mb-6">
          Not your average book <span className="circle-decoration">club</span>
        </h2>
        <p className="text-preset-5-regular text-neutral-700 text-balance">
          Connect with a community that speaks your language - from{' '}
          <strong>Python</strong> to <strong>TypeScript</strong> and everything
          in between. Our discussions blend technical depth with practical
          applications.
        </p>
      </div>
      <div>
        <Image
          src={communityImgDesktop}
          alt="A diverse group of tech book club members of different ages and backgrounds actively discussing and sharing insights from their reading"
          sizes="(max-width: 1280px) 100vw, 33vw"
          preload={true}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
