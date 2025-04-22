import React from "react";
import Navbar from "@/components/Navbar";
import { navItems } from "@/data/navItems";
import Carousel from "@/components/Carousel";

function page() {
  return (
    <div className="w-full bg-black min-h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center items-center pt-[100px] bg-black">
        <Navbar navItems={navItems} />
        <Carousel />
      </div>
    </div>
  );
}

export default page;
