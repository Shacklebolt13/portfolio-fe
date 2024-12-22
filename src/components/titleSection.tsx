import { showDate } from "@/utils/converters";
import { Model } from "@/db/getRepository";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
export default function TitleSection({
  data,
  className,
}: {
  data: Model;
  className?: string;
}) {
  var started_on = data?.started_on ? showDate(data?.started_on) : "";
  var ended_on = data?.ongoing
    ? "Present"
    : data?.ended_on
      ? showDate(data?.ended_on)
      : "";
  var duration = started_on && ended_on ? `${started_on} - ${ended_on}` : "";
  return (
    <div className={`${className ?? ""} block`}>
      <div className="container-fluid  flex flex-row justify-between">
        <div className="flex flex-row">
          <Image
            alt="Logo"
            className="object-fill rounded-xl bg-white"
            src={data.showcase.icon}
            width={70}
            height={70}
          />
          <span className=" xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl font-bold mx-2">{data.title}</span>
        </div>
        <div className="inline-block">
          <div className="flex flex-col justify-end min-h-full italic text-sm text-gray-400">
            <span>{data.organization ?? ""}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
