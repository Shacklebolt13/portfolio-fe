import Image from "next/image";

export default function Intro() {
  return (
    <>
      <Image src="/gifs/10xdev.gif" alt="10xdev" fill className="opacity-20" />
      <div className="flex flex-grow justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Hi, I am{" "}
            <span className="text-primary">Gagandeep Singh Bhambrah</span>
          </h1>
          <p className="text-2xl text-center">I am a full-stack developer</p>
        </div>
      </div>
    </>
  );
}
