import Image from 'next/image';
import { Stars } from './stars';
import avatarImg from '@/../public/img/image-avatars.webp';

export function SocialProof() {
  return (
    <div className="flex items-center gap-3">
      <Avatars />
      <div>
        <Stars />
        <span className="text-preset-7 text-neutral-700">
          200+ developers joined already
        </span>
      </div>
    </div>
  );
}

function Avatars() {
  return (
    <Image
      src={avatarImg}
      alt="Profile photos of tech book club members"
      width={110}
      height={40}
    />
  );
}
