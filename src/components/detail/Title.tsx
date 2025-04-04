"use client";
import { showDate } from "@/utils/converters";
import Image from "next/image";

export type TitleSectionProps = {
  started_on: Date;
  ended_on?: Date;
  title: string;
  organization: string;
  className?: string;
  logo: {
    icon: string;
    width?: number;
    height?: number;
  }
}

export default function TitleSection({
  started_on,
  ended_on,
  logo,
  title,
  organization,
  className,
}: TitleSectionProps) {
  var duration = `${showDate(started_on)} - ${ended_on ? showDate(ended_on) : "Present"}`;
  return (
    <div className={`${className ?? ""} block my-2`}>
      <div className="container-fluid  flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            alt="Logo"
            className="object-fill rounded-xl bg-white"
            src={logo.icon}
            width={logo.width ?? 70}
            height={logo.height ?? 70}
          />
          <span className="flex flex-col justify-center lg:text-5xl md:text-4xl sm-min:text-4xl text-4xl font-bold sm:mx-3 lg:mx-4">{title}</span>
        </div>
        <div className="inline-block">
          <div className="flex flex-col justify-end min-h-full italic text-sm text-gray-400">
            <span>{organization}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
