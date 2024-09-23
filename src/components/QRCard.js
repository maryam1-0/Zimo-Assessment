import Image from 'next/image';

const qrActions = [
  { icon: '/assets/download.svg', text: 'DOWNLOAD' },
  { icon: '/assets/Copy.svg', text: 'Copy Link' },
];

const QRCard = ({ onClose }) => (
  <div className="relative p-6 text-white rounded-lg w-72">
    <Image src="/assets/Rectangle2.svg" alt="Background Shape" width={280} height={280} className="absolute inset-0 z-0" />
    <div className="relative z-10 flex justify-between items-center">
      <Image src="/assets/smallQr.svg" alt="Back Arrow" width={20} height={20} className="cursor-pointer" />
      <p className="text-xs font-normal">GET A QR CODE</p>
      <Image src="/assets/close.svg" alt="Close Icon" width={20} height={20} className="cursor-pointer" onClick={onClose} />
    </div>
    <div className="relative z-10 flex flex-col items-center mb-2">
      <Image src="/assets/QR.svg" alt="QR Code" width={200} height={150} className="p-4" />
      <p className="text-sm font-normal">Revision Files</p>
    </div>
    <div className="relative z-10">
      {qrActions.map((item, index) => (
        <div key={index} className="flex items-center gap-x-3 justify-center mt-4">
          <div>
            <p className="text-xs font-normal">{item.text}</p>
          </div>
          <div>
            <Image src={item.icon} alt={item.text} width={12} height={20} />
          </div>
        </div>
      ))}
      <div className="flex items-center gap-x-3 mt-5 justify-center">
        <Image src="/assets/lock.svg" alt="Password" width={12} height={20} />
        <p className="ml-2 text-xs font-normal">SET PASSWORD</p>
      </div>
    </div>
    <div className="relative flex items-right justify-end mt-6">
      <p className="text-xs font-normal">Optional</p>
      <Image src="/assets/Tick.svg" alt="Tick Icon" width={40} height={20} className="ml-2" />
    </div>
  </div>
);

export default QRCard;
