import Image from 'next/image';
import { Stars } from './stars';
import { ArrowUpIcon } from './icons/arrow-up-icon';
import avatarImg from '@/../public/img/image-avatars.webp';
import Link from 'next/link';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="footer pt-12 xl:pt-20 rounded-tl-2xl rounded-tr-2xl">
      <div className="flex flex-col items-center px-4 md:px-8 xl:px-36">
        <h3 className="text-preset-2 text-neutral-100 text-center pb-10">
          Ready to debug your reading list?
        </h3>
        <Button variant="dark" asChild className="mb-6">
          <a
            href="#membership-options-section"
            aria-label="Review membership options (scrolls to membership section)"
          >
            Review membership options
            <ArrowUpIcon className="fill-white" />
          </a>
        </Button>
        <FooterSocialProof />
      </div>
      <div className="px-4 md:px-0 xl:px-36">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between gap-4 md:px-8 xl:px-0 py-6 border-t border-neutral-700">
          <FooterCopyright />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}

function FooterSocialProof() {
  return (
    <div className="flex items-center gap-3 mb-16">
      <FooterAvatars />
      <div>
        <Stars />
        <span className="text-preset-7 text-white">
          200+ developers joined already
        </span>
      </div>
    </div>
  );
}

function FooterAvatars() {
  return (
    <Image
      src={avatarImg}
      alt="Profile photos of tech book club members"
      width={110}
      height={40}
    />
  );
}

function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-preset-7 text-white text-center">
      &copy; {currentYear} - Tech Book Club
    </div>
  );
}

type SocialLink = {
  id: string;
  platformName: string;
  href: string;
  iconUrl: string;
};

function FooterSocialLinks() {
  const socialLinks: SocialLink[] = [
    {
      id: 'sl-1',
      platformName: 'Bluesky',
      href: 'https://bsky.app/',
      iconUrl: '/img/logo-bluesky.svg'
    },
    {
      id: 'sl-2',
      platformName: 'LinkedIn',
      href: 'https://linkedin.com/',
      iconUrl: '/img/logo-linkedin.svg'
    }
  ];

  return (
    <ul className="flex gap-6 justify-center items-center">
      {socialLinks.map((link) => (
        <SocialLink key={link.id} {...link} />
      ))}
    </ul>
  );
}

function SocialLink({ platformName, href, iconUrl }: Omit<SocialLink, 'id'>) {
  return (
    <li>
      <Link href={href}>
        <Image
          src={iconUrl}
          alt={`${platformName} logo`}
          width={22}
          height={22}
          className="w-[22px] h-[22px]"
        />
      </Link>
    </li>
  );
}
