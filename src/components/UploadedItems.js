import Image from 'next/image';
import { useState } from 'react';
import QRCard from './QRCard';

const svgIcons = [
  { src: '/assets/link-box.svg', alt: 'Copy Link', label: 'COPY LINK' },
  { src: '/assets/QR-box.svg', alt: 'QR Link', label: 'QR LINK', action: 'showQR' },
  { src: '/assets/email-box.svg', alt: 'Email', label: 'EMAIL' },
  { src: '/assets/whatsapp-box.svg', alt: 'WhatsApp', label: 'WHATSAPP' },
  { src: '/assets/msg-box.svg', alt: 'Message', label: 'MESSAGE' },
  { src: '/assets/fb-box.svg', alt: 'Facebook', label: 'FACEBOOK' },
  { src: '/assets/x-box.svg', alt: 'X', label: 'X' },
];


const UploadedItems = ({ onClose, onShowQRCard }) => {
  const [showQRCard, setShowQRCard] = useState(false);

  const handleIconClick = (action) => {
    if (action === 'showQR') {
      onShowQRCard();
    }
  };
  const handleCloseQRCard = () => {
    setShowQRCard(false);
  };

  return (
    <div className="relative flex flex-col text-white min-h-screen h-full p-1 slide-in" style={{ height: '100vh', overflow: 'hidden' }}>
      <Image
        src="/assets/Rectangle.svg"
        alt="ZTFR Background"
        layout="fill"
        objectFit="cover"
        className="absolute right-0 top-0 h-screen w-1/2 z-0"
      />
      <div className="relative flex flex-col w-full h-full px-6 py-5">
        <div className="flex justify-between mb-4">
          <button className='text-lg tracking-custom-150' onClick={onClose}>CLOSE</button>
          <Image src="/assets/youdidit.svg" alt="You Did It" width={132} height={15} />
          <div className="flex items-center space-x-5">
            <Image src="/assets/person.svg" alt="Person" width={20} height={25} />
            <Image src="/assets/flag.svg" alt="Flag" width={50} height={50} />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className="flex flex-col flex-grow ml-5 mt-3">
            <div className="flex flex-col space-y-4 mb-4 overflow-hidden">
              <h2 className="text-lg font-lato tracking-custom-150">ITEMS IN THE ZTFR</h2>
              <div className='flex items-center space-x-5'>
                <p className="text-xs font-lato tracking-custom-150">3 FILES</p>
                <p className="text-xs font-lato tracking-custom-150">1 FOLDER</p>
              </div>
              <p className="text-xs font-lato tracking-custom-150">2.8 GB</p>
              <p className="text-xs font-lato tracking-custom-150 ">ZTFR EXPIRES IN 7 DAYS</p>
            </div>
            <div className='flex flex-col space-y-5 mt-8'>
              <div className='space-y-2'>
                <p className="text-xs font-lato tracking-custom-150">Image1.jpg</p>
                <p className="text-xs font-lato tracking-custom-150 text-gray-400">3MB - JPG</p>
              </div>
              <div className='space-y-2'>
                <p className="text-xs font-lato tracking-custom-150">diary.docx</p>
                <p className="text-xs font-lato tracking-custom-150 text-gray-400">35KB - DOCX</p>
              </div>
              <div className='space-y-2'>
                <p className="text-xs font-lato tracking-custom-150">ID.png</p>
                <p className="text-xs font-lato tracking-custom-150 text-gray-400">1.2MB - PNG</p>
              </div>
              <div className='space-y-3'>
                <div className='flex space-x-2'>
                  <Image src="/assets/folder.svg" alt="Flag" width={15} height={15} />
                  <p className="text-xs font-lato tracking-custom-150">Assignment</p>
                </div>
                <div className='flex space-x-2'>
                  <Image src="/assets/folder.svg" alt="Flag" width={15} height={15} />
                  <p className="text-xs font-lato tracking-custom-150">Folder - 50 items - 2.8GB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-5">
            <Image src="/assets/ztfr-uploaded.svg" alt="ZTFR Uploaded" width={522} height={390} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 gap-y-5">
          <h3 className="text-center text-lg font-lato tracking-custom-150">DOWNLOAD OR SHARE</h3>
          <div className="flex flex-wrap justify-center mt-4 space-x-8">
            {svgIcons.map((icon, index) => (
              <div className='flex flex-col items-center'>
                <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick(icon.action)}>
                  <Image src={icon.src} alt={icon.alt} width={73} height={73} />
                </div>
                <div>
                  <p className="text-10px mt-2 tracking-custom-150">{icon.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-[110px]'>
          <div className="flex justify-center mt-6">
            <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={506} height={50} />
          </div>

          <div className='flex justify-between items-center mt-[135px]'>
            <div className="mt-4">
              <p className="text-sm font-lato tracking-custom-150">ZTFR7867867861</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Image src="/assets/icons.svg" alt="Icons" width={253} height={20} />
            </div>
          </div>
        </div>
      </div>
      {showQRCard && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleCloseQRCard}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <QRCard onClose={handleCloseQRCard} />
          </div>
        </div>
      )}
    </div>
  );
}
export default UploadedItems;
