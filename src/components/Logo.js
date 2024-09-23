import Image from 'next/image';

const Logo = () => (
  <div className="absolute p-4">
    <Image src="/assets/Logo.svg" alt="ZTFR Logo" width={80} height={25} />
  </div>
);

export default Logo;
