import Navbar from "@/components/Navbar";
import React from "react";
import DonateForm from "@/components/DonateForm";
import { navItems } from "@/data/navItems";

function page() {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <Navbar navItems={navItems} />
      <DonateForm />
    </div>
  );
}

export default page;
