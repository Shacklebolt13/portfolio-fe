import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex min-h-fill-available">
      <Image
        src="/gifs/10xdev.gif" alt="10xdev" fill className="opacity-20 min-h-screen" />
      <div className="flex flex-grow justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl font-bold text-center">
            Hi, I am{" "}
            <span className="text-primary">Gagandeep Singh Bhambrah</span>
          </span>
          <p className="text-2xl text-center">I am a Backend developer</p>
        </div>
      </div>
    </div>
  );
}
