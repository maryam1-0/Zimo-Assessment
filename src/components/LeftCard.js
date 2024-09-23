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
    console.log('Current state:', showUploadedItems);

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
    <div className="relative text-white rounded-lg w-72 mt-8 p-1">
      <Image src="/assets/Subtraction 1.svg" alt="Subtraction" width={260} height={290} className="absolute inset-0 z-0 ml-3 mt-3" />
      <div className="relative z-10 flex flex-col justify-between h-full p-5">
        <div className="absolute top-3 left-3">
          <Image src="/assets/black-tick.svg" alt="Black Tick" width={80} height={80} />
        </div>
        <div className="flex flex-col items-end mb-4 mr-2">
          <div className='flex gap-x-3'>
            <p className="text-sm font-medium">FILES UPLOADED</p>
            <Image src="/assets/lock.svg" alt="Lock" width={12} height={12} />
          </div>
          <div className='mr-8'>
            <p className="text-xs mt-1">2.8 gb COMPLETED</p>
            <p className="text-xs mt-1">ZTFR7867867861</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <p className="text-3xl font-bold text-center">
            <Image src="/assets/youdidit.svg" alt="youdidit" width={200} height={50} />
          </p>
          <div className="flex items-center justify-center mt-4">
            <Image src="/assets/ztfr-uploaded.svg" alt="ztfr uploaded" width={200} height={50} />
            <div className='flex flex-col items-center'>
              <Image src="/assets/QR.svg"
                alt="QR Code"
                width={120}
                height={120}
                onClick={handleShowQRCard}
                className="cursor-pointer"
              />

              <p className="text-xs " >QR Code</p></div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs">COPY YOUR DOWNLOAD LINK</p>
          <div className="flex justify-center items-center mt-1">
            <p className="text-xs underline mr-2">{downloadLink}</p>
            <div onClick={handleCopyLink} className="cursor-pointer">
              {isCopied ? (
                <FaCheck className="text-green-500" size={16} />
              ) : (
                <Image src="/assets/Copy.svg" alt="Copy Icon" width={10} height={16} />
              )}
            </div>          </div>
        </div>
        <button onClick={handleShowItems} className="text-xs text-right mr-3 mt-4 cursor-pointer">SEE WHAT'S INSIDE</button>

        <div className="flex justify-between ">
          <div className="flex justify-center w-full mt-2">
            <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={150} height={20} />
          </div>
          <div className="absolute mt-1 right-7 ">
            <Image src="/assets/options.svg" alt="Options Icon" width={6} height={6} onClick={handleShowOptionsCard} className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-[-140px] top-[150px] transform rotate-90 text-xs text-black">
        ADVANCED ENCRYPTION STANDARD (AES) 256-BIT
      </div>
      {showUploadedItems && (
        <div
          className="fixed inset-0 z-50 flex justify-end transition-transform duration-500 ease-in-out transform"
          onClick={handleShowItems}
          style={{ height: '100vh', overflow: 'hidden' }}
        >
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
