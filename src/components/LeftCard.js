import Image from 'next/image';

const LeftCard = () => (
  <div className="relative text-white rounded-lg w-72 mt-8 p-1">
    <Image src="/assets/Subtraction 1.svg" alt="Subtraction" width={290} height={290} className="absolute inset-0 z-0" />
    <div className="relative z-10 flex flex-col justify-between h-full p-5">
      <div className="absolute top-2 left-2">
        <Image src="/assets/black-tick.svg" alt="Black Tick" width={70} height={20} />
      </div>
      <div className="flex flex-col items-end mb-4">
        <div className='flex gap-x-3'>
          <p className="text-md font-medium">FILES UPLOADED</p>
          <Image src="/assets/lock.svg" alt="Lock" width={12} height={12} />
        </div>
        <div className='mr-10'>
          <p className="text-xs mt-1">2.8 gb COMPLETED</p>
          <p className="text-xs mt-1">ZTFR7867867861</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <p className="text-3xl font-bold text-center">
          <Image src="/assets/youdidit.svg" alt="QR Code" width={200} height={50} />
        </p>
        <div className="flex items-center justify-center mt-4">
          <Image src="/assets/ztfr-uploaded.svg" alt="ztfr uploaded" width={200} height={50} />
          <Image src="/assets/QR.svg" alt="QR Code" width={120} height={120} />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs">COPY YOUR DOWNLOAD LINK</p>
        <div className="flex justify-center items-center mt-1">
          <p className="text-xs underline mr-2">https://ztransfer-gr4kUXAwKd</p>
          <Image src="/assets/Copy.svg" alt="Copy Icon" width={10} height={16} />
        </div>
        <p className="text-xs text-right mt-4">SEE WHAT'S INSIDE</p>
      </div>
      <div className="flex justify-between items-end mt-6">
        <div className="flex justify-center w-full mt-3">
          <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={180} height={20} />
        </div>
        <div className="absolute bottom-2 right-2 mb-2">
          <Image src="/assets/options.svg" alt="Options Icon" width={10} height={16} />
        </div>
      </div>
    </div>
    <div className="absolute right-[-155px] top-[150px] transform rotate-90 text-xs text-black">
      ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
    </div>
  </div>
);

export default LeftCard;
