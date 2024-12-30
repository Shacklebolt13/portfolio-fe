import GreetingPage from "@/components/greetingPage/main";
import { getAllDisplayData } from "@/services/dataService";

export default function Home() {
  return (
    <>
      <GreetingPage data={getAllDisplayData()} />
    </>
  );
}
