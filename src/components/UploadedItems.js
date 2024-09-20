import Image from 'next/image';

const svgIcons = [
  { src: '/assets/link-box.svg', alt: 'Copy Link', label: 'COPY LINK' },
  { src: '/assets/qr-box.svg', alt: 'QR Link', label: 'QR LINK' },
  { src: '/assets/email-box.svg', alt: 'Email', label: 'EMAIL' },
  { src: '/assets/whatsapp-box.svg', alt: 'WhatsApp', label: 'WHATSAPP' },
  { src: '/assets/msg-box.svg', alt: 'Message', label: 'MESSAGE' },
  { src: '/assets/fb-box.svg', alt: 'Facebook', label: 'FACEBOOK' },
  { src: '/assets/x-box.svg', alt: 'X', label: 'X' },
];

const UploadedItems = () => (
  <div className="relative flex flex-col text-white min-h-screen p-1">
    <Image
      src="/assets/Rectangle.svg"
      alt="ZTFR Background"
      layout="fill"
      objectFit="cover"
      className="absolute right-0 top-0 h-screen w-1/2 z-0"
    />
    <div className="relative flex flex-col w-full px-6 py-10">
      <div className="flex justify-between mb-4">
        <div className="flex-none">
          <Image src="/assets/close-text.svg" alt="Close Text" width={60} height={50} />
        </div>
        <div className="flex-none">
          <Image src="/assets/youdidit.svg" alt="You Did It" width={110} height={60} />
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/assets/person.svg" alt="Person" width={15} height={20} />
          <Image src="/assets/flag.svg" alt="Flag" width={40} height={40} />
        </div>
      </div>
      <div className='flex'>
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-lg font-lato">ITEMS IN THE ZTFR</h2>
          <div className="space-y-2">
            <div className='flex space-x-4'>
              <p className='text-xs font-lato'>3 FILES</p>
              <p className='text-xs mb-1 font-lato'>1 FOLDER</p>
            </div>
            <p className='text-xs font-lato'>2.8 GB</p>
            <p className='text-xs font-lato'>ZTFR EXPIRES IN 7 DAYS</p>
          </div>
          <div className="space-y-2">
            <p className='text-xs font-lato'>image1.jpg</p>
            <p className='text-xs font-lato'>3MB - jpg</p>
            <p className='text-xs font-lato'>diary.docx</p>
            <p className='text-xs font-lato'>35kb - DOCX</p>
            <p className='text-xs font-lato'>ID.png</p>
            <p className='text-xs font-lato'>1.2MB - PNG</p>
            <div className="flex items-center space-x-2">
              <Image src="/assets/folder.svg" alt="Folder" width={14} height={10} />
              <p className='text-sm font-lato'>Assignment</p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/assets/folder.svg" alt="Folder" width={14} height={10} />
              <p className='text-sm font-lato'>Folder - 50 items - 2.8GB</p>
            </div>
          </div>
        </div>
        <div className="relative flex-grow flex justify-end items-center">
          <Image
            src="/assets/ztfr-uploaded.svg"
            alt="ZTFR Uploaded"
            objectFit="contain"
            width={450}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-center text-lg mb-4 font-lato">DOWNLOAD OR SHARE</h3>
        <div className="flex space-x-8">
          {svgIcons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={icon.src} alt={icon.alt} width={50} height={50} />
              <p className="text-xs mt-2 font-lato">{icon.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-[-15px]">
        <Image src="/assets/ZTransferLogo.svg" alt="ZTransfer Logo" width={400} height={50} />
      </div>
      <div className="flex justify-between">
        <div className="text-left text-sm font-lato">ZTFR7867867861</div>
        <div className="flex space-x-4">
          <Image src="/assets/icons.svg" alt="Icons" width={170} height={50} />
        </div>
      </div>
    </div>
  </div>
);

export default UploadedItems;
