import Image from 'next/image';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { RenameCard, QRCard, UploadedItems } from '../components';

const LeftCard = () => {
  const [showUploadedItems, setShowUploadedItems] = useState(false);
  const [showQRCard, setShowQRCard] = useState(false);
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const downloadLink = "https://ztransfer-gr4kUXAwKd";
  const handleShowItems = () => {
    setShowUploadedItems(prev => !prev);
  };
  const handleShowQRCard = () => {
    setShowQRCard((prev) => !prev);
  };
  const handleShowOptionsCard = () => {
    setShowOptionsCard((prev) => !prev);
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(downloadLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="relative text-white rounded-lg w-[314px] h-[489px] mt-[30px] ml-[35px] ">
      <Image src="/assets/Subtraction 1.svg" alt="Subtraction" width={314} height={489} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="mt-5 ml-5">
          <Image src="/assets/black-tick.svg" alt="Black Tick" width={67.56} height={49.48} />
        </div>
        <div className="absolute p-5 ml-[110px] space-y-2">
          <div className="flex justify-between">
            <p className="text-sm font-medium w-[149px] h-[17px] tracking-custom-150">FILES UPLOADED</p>
            <div className='left-387 top-317' >
              <Image
                src="/assets/lock.svg"
                alt="Lock"
                width={12.18}
                height={15.5}
              />
            </div>
          </div>
          <div className='flex flex-col space-y-5'>
            <div className="absolute">
              <p className="text-10px leading-none w-[140px] h-[12px] tracking-custom-150">2.8 GB COMPLETED</p>
            </div>

            <div className="absolute">
              <p className="text-10px leading-none w-[102px] h-[12px] tracking-custom-150">ZTFR7867867861</p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-center items-center mt-[70px]">
          <Image src="/assets/youdidit.svg" alt="youdidit" width={208.28} height={21.99} />
          <div className="flex items-center justify-center mt-[20px] ml-[70px]">
            <Image src="/assets/ztfr-uploaded.svg" alt="ztfr uploaded" width={176.63} height={129.36} />
            <div className="flex flex-col items-center mt-[80px]">
              <Image
                src="/assets/QR.svg"
                alt="QR Code"
                width={60}
                height={60}
                onClick={handleShowQRCard}
                className="cursor-pointer mr-[35px]"
              />
              <p className="text-xs mt-2 ml-[-35px] tracking-custom-150">QR Code</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center text-center items-center">
          <p className="w-[220px] h-[15px] text-xs tracking-custom-150 ">COPY YOUR DOWNLOAD LINK</p>
          <div className="flex justify-center items-center mt-3 ">
            <p className=" w-[240.62px] h-[15px] underline text-xs tracking-custom-150 ml-3">{downloadLink}</p>
            <div onClick={handleCopyLink} className="cursor-pointer">
              {isCopied ? (
                <FaCheck className="text-green-500" size={16} />
              ) : (
                <Image src="/assets/Copy.svg" alt="Copy Icon" width={9} height={11.21} />
              )}
            </div>
          </div>
        </div>
        <div className='flex items-end justify-end'>
          <button onClick={handleShowItems} className="w-[140px] h-[12px] mt-4  cursor-pointer text-10px tracking-custom-150">SEE WHAT'S INSIDE</button>
        </div>
        <div className="flex justify-between ">
          <div className="flex justify-center w-full mt-6">
            <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={155.37} height={15.33} />
          </div>
          <div className="absolute mt-5 right-3 ">
            <Image src="/assets/options.svg" alt="Options Icon" width={6.71} height={25} onClick={handleShowOptionsCard} className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="absolute text-xs right-[-130px] top-[135px] transform rotate-90 w-[240px] h-[7px] text-black whitespace-nowrap font-lato">
        ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
      </div>
      {showUploadedItems && (
        <div className="fixed inset-0 z-50 flex justify-end transition-transform duration-500 ease-in-out transform">
          <div className="w-1/2" onClick={(e) => e.stopPropagation()}>
            <UploadedItems onClose={handleShowItems} onShowQRCard={handleShowQRCard} />
          </div>
        </div>
      )}

      {showQRCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleShowQRCard}>
          <div onClick={(e) => e.stopPropagation()}>
            <QRCard onClose={handleShowQRCard} />
          </div>
        </div>
      )}

      {showOptionsCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleShowOptionsCard}>
          <div onClick={(e) => e.stopPropagation()}>
            <RenameCard onClose={handleShowOptionsCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftCard;