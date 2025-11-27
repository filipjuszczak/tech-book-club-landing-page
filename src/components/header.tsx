import Image from 'next/image';
import logo from '@/../public/img/logo.svg';

export function Header() {
  return (
    <header className="mb-12 md:mb-16 xl:mb-20">
      <Image src={logo} alt="Tech book club logo" />
    </header>
  );
}
