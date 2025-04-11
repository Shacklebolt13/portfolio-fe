import ShowCaseTabs from "@/components/showcaseTabs";
import {
  getDisplayData,
} from "@/services/dataService";
import { Suspense } from "react";

export const metadata = {
  title: "Showcase",
  description: "Showcase of projects and experiences.",
};

export default function Page() {
  return (
    <div className="flex flex-grow">
      <div className="p-4 flex-col flex-grow max-w-full">
        <Suspense>
          <ShowCaseTabs data={getDisplayData()} />
        </Suspense>
      </div>
    </div>
  );
}
