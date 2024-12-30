import { getChronologicalData } from "@/services/dataService";
import Chronology from "../chronology";
import Intro from "./intro";
import { Model } from "@/dtos/server";

export default function GreetingPage({ data }: { data: Map<string, Model[]> }) {
  return (
    <>
      <div className="m-4 flex flex-col min-h-screen max-h-screen justify-center">
        <Intro />
      </div>
      <Chronology timelineItems={getChronologicalData(data)} />
    </>
  );
}
