import Image from 'next/image';
import { useState } from 'react';
import QRCard from './QRCard';

const cardItems = [
  { icon: '/assets/pencil-icon.svg', text: 'RENAME FILE/FOLDER' },
  { icon: '/assets/preview-copy.svg', text: 'PREVIEW' },
  { icon: '/assets/info-outline.svg', text: 'VIEW DETAILS' },
  { icon: '/assets/clock.svg', text: 'EXPIRES IN' },
  { icon: '/assets/hyperlink-icon.svg', text: 'GET A LINK' },
  { icon: '/assets/smallQr.svg', text: 'GET A QR CODE', action: 'qr' },
  { icon: '/assets/whatsapp.svg', text: 'WHATSAPP' },
  { icon: '/assets/email.svg', text: 'EMAIL' },
  { icon: '/assets/lock.svg', text: 'SET PASSWORD' },
  { icon: '/assets/assign.svg', text: 'ASSIGN' },
  { icon: '/assets/close.svg', text: 'REMOVE' },
];

const RenameCard = ({ onClose }) => {
  const [showQRCard, setShowQRCard] = useState(false);

  const handleItemClick = (action) => {
    if (action === 'qr') {
      setShowQRCard(true);
    }
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center relative">
      <div className="flex items-center justify-center gap-x-5">
        <div className="relative p-6 text-white rounded-lg w-72 h-auto">
          <Image
            src="/assets/Rectangle2.svg"
            alt="ZTFR Logo"
            width={280}
            height={500}
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 flex justify-between items-center">
            <Image src="/assets/pencil-icon.svg" alt="Pencil Icon" width={18} height={20} className="cursor-pointer" />
            <p className="text-xs mr-auto ml-5 font-lato">RENAME TITLE</p>
            <Image
              src="/assets/close.svg"
              alt="Close Icon"
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="relative z-10 mt-6">
            {cardItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-2 gap-x-4 cursor-pointer"
                onClick={() => handleItemClick(item.action)}
              >
                <Image src={item.icon} alt={item.text} width={18} height={20} />
                <p className="ml-2 text-xs font-lato">{item.text}</p>
              </div>
            ))}
            <div className="flex justify-between mt-10">
              <p className="text-xs font-lato">ZTFER7867867861</p>
              <div className="flex items-center">
                <p className="text-xs font-lato">MORE OPTIONS</p>
                <Image src="/assets/options.svg" alt="Options Icon" width={8} height={5} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
        {showQRCard && (
          <div className="relative top-8">
            <QRCard onClose={() => setShowQRCard(false)} />
          </div>
        )}
      </div>
    </div>
  );
};
export default RenameCard;
