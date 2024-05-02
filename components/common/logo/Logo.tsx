'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logo from './top_bar_logo.webp';

const Logo = () => {
  const router = useRouter();
  function handleClickToHome() {
    router.push('/');
  }
  return (
    <Image
      src={logo}
      onClick={handleClickToHome}
      style={{ cursor: 'pointer' }}
      alt="Logo"
      width={50}
      height={50}
    />
  );
};

export default Logo;
