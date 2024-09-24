import Image from 'next/image';

const Logo = () => (
  <div className="absolute top-10 left-10">
    <Image src="/assets/Logo.svg" alt="ZTFR Logo" width={147} height={50} />
  </div>
);

export default Logo;
