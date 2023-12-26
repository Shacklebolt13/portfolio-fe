"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  BG_FILL,
  BG_OPACITY,
  BORDER_COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  PROFILE_PICTURE_FILE_NAME,
  TEXT_COLOR,
} from "@/constants/public-assets";

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
      className={` container flex h-99 p-1 my-3 mx-6 lg:min-w-fill-available xl:min-w-fill-available max-xl:min-w-fill-available justify-between relative`}
    >
      {/* left side */}
      <div>
        <a href="/">
          <button
            className={`flex h-fit w-fit p-1 rounded-full ${BORDER_COLOR} ${BORDER_WIDTH} ${BG_FILL} ${BG_OPACITY} ${TEXT_COLOR}`}
          >
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
      <div className="flex justify-center right-0 items-center ">
        <a
          href="#about"
          className={`mx-2 px-2 py-1 rounded-2xl ${BORDER_RADIUS} ${BORDER_COLOR}  ${BORDER_WIDTH} ${BG_FILL} ${BG_OPACITY} ${TEXT_COLOR}`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`mx-2 px-2 py-1 ${BORDER_RADIUS} ${BORDER_COLOR}  ${BORDER_WIDTH} ${BG_FILL} ${BG_OPACITY} ${TEXT_COLOR}`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`mx-2 px-2 py-1 ${BORDER_RADIUS} ${BORDER_COLOR}  ${BORDER_WIDTH} ${BG_FILL} ${BG_OPACITY} ${TEXT_COLOR}`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
