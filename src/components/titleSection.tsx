import { showDate } from "@/app/utils/converters";
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
    <div className={className?.concat(" inline-block") ?? "inline-block"}>
      <div className="container-fluid  flex justify-between">
        <div className="inline-block">
          <span className="text-6xl font-bold">{data.title}</span>
        </div>
        <div className="inline-block">
          <div className="flex flex-col justify-end min-h-full italic text-sm text-gray-400">
            <span>{data.organization ?? ""}</span>
            <span>
              {showDate(data.started_on)} {" - "}
              {data.ongoing ? "Present" : showDate(data.ended_on)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
