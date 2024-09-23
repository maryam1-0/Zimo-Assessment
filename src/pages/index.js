import { Logo, LeftCard, UploadContent } from '../components';


export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white text-black relative">
        <Logo />
        <div className="flex items-center justify-center">
          <div className="items-start absolute left-12">
            <LeftCard />
          </div>
          <UploadContent />
        </div>
      </div>
    </>
  );
}
