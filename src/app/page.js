import Navbar from "@/components/Navbar";
import TopPane from "@/components/TopPane";
import Image from "next/image";
import { navItems } from "../../public/navbarItems";

export default function Home() {
  return (
    <div>
      <Navbar navItems={navItems} />
      <TopPane></TopPane>
    </div>
  );
}
