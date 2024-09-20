import Logo from '../components/Logo';
import LeftCard from '../components/LeftCard';
import UploadContent from '../components/UploadContent';
import UploadedItems from '@/components/UploadedItems';
import RenameCard from '../components/RenameCard';
import QRCard from '../components/QRCard';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-white text-black relative">
        <Logo />
        <div className="flex flex-col items-center justify-center">
          <div className="items-start absolute left-10">
            <LeftCard />
          </div>
          <UploadContent />
        </div>
      </div>
      <div className="min-h-screen bg-white text-black relative">
        <Logo />
        <div className="flex items-center relative">
          <div className="flex-grow relative left-10">
            <LeftCard />
          </div>
          <div className="absolute inset-y-0 left-1/3 flex items-center justify-center w-1/3 z-10">
            <UploadContent />
          </div>
          <div className="relative flex-grow w-1/4 justify-end z-20">
            <UploadedItems />
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white text-black flex items-center justify-center relative">
        <div className="absolute top-0 left-0 right-0 flex">
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <RenameCard />
          <div className="top-1/2 transform translate-y-1/4">
            <QRCard />
          </div>
        </div>
      </div>
    </div>
  );
}
