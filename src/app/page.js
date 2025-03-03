import Navbar from "@/components/Navbar";
import TopPane from "@/components/TopPane";
import Image from "next/image";

export default function Home() {
  /**
   * navItems: Navigation links used by the Navbar component.
   * Each object contains:
   * - name: The text displayed in the Navbar.
   * - path: The route path to navigate to (e.g., "/aboutUs").
   */
  const navItems = [
    { name: "About Us", path: "/aboutUs" },
    { name: "Meet the Board", path: "/meetTheBoard" },
    { name: "Alumni", path: "/alumni" },
    { name: "Get Involved", path: "/getInvolved" },
    { name: "Events", path: "/events" },
    { name: "Apply to Board", path: "/applyToBoard" },
    { name: "Proposing To Direct", path: "/proposeToDirect" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contactUs" },
    { name: "Donation", path: "/donation" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <div>
      <Navbar navItems={navItems} />
      <TopPane></TopPane>
    </div>
  );
}
