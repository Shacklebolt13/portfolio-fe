"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { PROFILE_PICTURE_FILE_NAME } from "@/constants/public-assets";

export const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > nav.offsetHeight) {
          nav.classList.add("hidden");
        } else {
          nav.classList.remove("hidden");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` container flex h-99 p-1 my-3 mx-6 rounded-3xl lg:min-w-fill-available xl:min-w-fill-available max-xl:min-w-fill-available justify-between fixed`}
    >
      {/* left side */}
      <div>
        <a href="/">
          <button className="flex bg-black h-fit w-fit p-1 rounded-full border-teal-400 hover:border-teal-100 border-2">
            <Image
              src={`/${PROFILE_PICTURE_FILE_NAME}`}
              className="rounded-full w-10"
              id="avatar"
              alt="avatar"
              width={100}
              height={100}
            />
          </button>
        </a>
      </div>

      {/* right side */}
      <div className="flex justify-center right-0 items-center">
        <a
          href="#about"
          className="text-teal-400 border-teal-400 hover:border-teal-100 hover:text-teal-100   mx-2 border-2 px-2 py-1 rounded-2xl"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-teal-400 border-teal-400 hover:border-teal-100 hover:text-teal-100  mx-2 border-2 px-2 py-1 rounded-2xl"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-teal-400 border-teal-400 hover:border-teal-100 hover:text-teal-100  mx-2 border-2 px-2 py-1 rounded-2xl"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
