import Image from "next/image";
import React from "react";
import { PROFILE_PICTURE_FILE_NAME } from "@/constants/profile";
import { NavBarOptionsEnum } from "@/enums/NavBarOptionsEnum";

export const Navbar = () => {
  return (
    <nav className="container flex bg-black h-99 p-1 my-3 mx-6 rounded-3xl lg:min-w-fill-available xl:min-w-fill-available max-xl:min-w-fill-available justify-between sticky">
      {/* left side */}
      <div className="flex bg-black h-fit w-fit p-1 rounded-3xl border-teal-400 border-2">
        <Image
          src={`/${PROFILE_PICTURE_FILE_NAME}`}
          className="rounded-full w-10"
          id="avatar"
          alt="avatar"
          width={100}
          height={100}
        />
      </div>

      {/* right side */}
      <div className="inline-block flex-col justify-center right-0">
        <a href="#about" className="text-white text-lg font-bold mx-2">
          About
        </a>
        <a href="#projects" className="text-white text-lg font-bold mx-2">
          Projects
        </a>
        <a href="#contact" className="text-white text-lg font-bold mx-2">
          Contact
        </a>
      </div>
    </nav>
  );
};
