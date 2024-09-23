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
          <button onClick={onClose}>Close</button>
          <Image src="/assets/youdidit.svg" alt="You Did It" width={110} height={60} />
          <div className="flex items-center space-x-4">
            <Image src="/assets/person.svg" alt="Person" width={15} height={20} />
            <Image src="/assets/flag.svg" alt="Flag" width={40} height={40} />
          </div>
        </div>

        <div className="flex flex-grow">
          <div className="flex flex-col space-y-2 mb-4 overflow-hidden" style={{ height: '100%' }}>
            <h2 className="text-lg font-lato">ITEMS IN THE ZTFR</h2>
            <p className="text-xs font-lato">3 FILES</p>
            <p className="text-xs font-lato">1 FOLDER</p>
            <p className="text-xs font-lato">ZTFR EXPIRES IN 7 DAYS</p>

            <p className="text-xs font-lato">image1.jpg</p>
            <p className="text-xs font-lato">3MB - jpg</p>
            <p className="text-xs font-lato">diary.docx</p>
            <p className="text-xs font-lato">35kb - DOCX</p>
          </div>
          <div className="relative flex-grow flex justify-end items-center">
            <Image src="/assets/ztfr-uploaded.svg" alt="ZTFR Uploaded" width={300} height={200} objectFit="contain" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-center text-lg mb-4 font-lato">DOWNLOAD OR SHARE</h3>
          <div className="flex flex-wrap justify-center mt-4 space-x-4">
            {svgIcons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick(icon.action)}>
                <Image src={icon.src} alt={icon.alt} width={40} height={40} />
                <p className="text-xs mt-2">{icon.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={250} height={30} />
        </div>
        <div className='flex justify-between items-center'>
          <div className="flex justify-between mt-2">
            <p className="text-sm font-lato">ZTFR7867867861</p>
          </div>
          <div className="flex space-x-4">
            <Image src="/assets/icons.svg" alt="Icons" width={170} height={50} />
          </div></div>
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
