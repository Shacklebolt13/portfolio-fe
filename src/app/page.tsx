import Image from "next/image";

export const metadata = {
  title: "Gagandeep Singh Bhambrah | Portfolio",
  description: "Hi, I am Gagandeep Singh Bhambrah, a Backend developer. Check out my portfolio to know more about me.",
  openGraph: {
    title: "Gagandeep Singh Bhambrah | Portfolio",
    description: "Hi, I am Gagandeep Singh Bhambrah, a Backend developer. Check out my portfolio to know more about me.",
    images: [
      {
        url: "/dp.jpg",
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function Home() {
  return (
    <div className="m-4 flex flex-grow">
      <Image src="/gifs/10xdev.gif" alt="10xdev" fill className="opacity-20" />
      <div className="flex flex-grow justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Hi, I am{" "}
            <span className="text-primary">Gagandeep Singh Bhambrah</span>
          </h1>
          <p className="text-2xl text-center">I am a Backend developer</p>
        </div>
      </div>
    </div>
  );
}
