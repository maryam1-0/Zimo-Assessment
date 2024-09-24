import Image from "next/image";

const UploadContent = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center left-726 top-422">
    <Image
      src="/assets/letsdothis.svg"
      alt="Let's Do This"
      width={468.14}
      height={235.08}
    />
    <div className=" text-black text-xs transform translate-y-[110px] tracking-custom-150">
      <p>UPLOAD FILES OR FOLDERS BY DROPPING THEM ANYWHERE IN THIS WINDOW</p>
    </div>
  </div>
);

export default UploadContent;
