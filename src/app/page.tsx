import { getPortFolioObject } from "./services";
import { Fab } from "@/components/fab";
import { Navbar } from "@/components/navbar";
import { NavBarOptionsEnum } from "@/enums/NavBarOptionsEnum";

export default function Home() {
  const data = getPortFolioObject();

  return (
    <main>
      <Navbar></Navbar>
    </main>
  );
}
