import Image from 'next/image';

const Logo = () => (
  <div className="absolute p-8">
    <Image src="/assets/Logo.svg" alt="ZTFR Logo" width={120} height={120} />
  </div>
);

export default Logo;
