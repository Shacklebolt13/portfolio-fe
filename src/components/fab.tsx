"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export const Fab = () => {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* {showFab && (
        <div className="absolute right-0 bottom-0 mx-10 my-10">
          <button className="bg-black m-1 p-4 rounded-full border-teal-400 border-2 hover:border-teal-100 text-teal-400 hover:text-teal-100">
            <ArrowUpIcon className="h-5 w-5 " />
          </button>
        </div>
      )} */}
    </>
  );
};
