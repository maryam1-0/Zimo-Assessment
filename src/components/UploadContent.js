import Image from "next/image";

const UploadContent = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <Image 
      src="/assets/letsdothis.svg" 
      alt="Let's Do This" 
      width={400} 
      height={500} 
    />
    <div className="mt-4 text-gray-600 text-sm transform translate-y-10">
      <p>UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW</p>
    </div>
  </div>
);

export default UploadContent;
