import Chronology from "../chronology";
import Intro from "./intro";

export default function GreetingPage() {
  return (
    <div className="m-4 flex flex-grow">
      <Intro />
      <Chronology />
    </div>
  );
}
