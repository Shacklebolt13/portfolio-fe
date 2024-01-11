import { showDate } from "@/utils/converters";
import { Model } from "@/db/getRepository";
import { MDXRemote } from "next-mdx-remote/rsc";
export default function TitleSection({
  data,
  className,
}: {
  data: Model;
  className?: string;
}) {
  return (
    <div className={`${className ?? ""} block`}>
      <div className="container-fluid  flex flex-row justify-between">
        <div className="inline-block">
          <span className="text-6xl font-bold">{data.title}</span>
        </div>
        <div className="inline-block">
          <div className="flex flex-col justify-end min-h-full italic text-sm text-gray-400">
            <span>{data.organization ?? ""}</span>
            <span>
              {showDate(data.started_on)} {" - "}
              {data.ongoing ?? true ? "Present" : showDate(data.ended_on)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
