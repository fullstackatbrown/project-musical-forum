import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import React from "react";
import { images } from "../page";
import { navItems } from "@/data/navItems";
import MusicalSection from "@/components/MusicalSection";
import { Footer } from "@/components/Footer";

function page() {
  return (
    <div className="w-full bg-black min-h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center items-center pt-[100px] bg-black">
        <Navbar navItems={navItems} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-20 5 140 140"
          preserveAspectRatio="none"
          className="absolute w-[2800px] h-[1700px] -top-80"
        >
          <defs>
            <linearGradient
              id="triangleGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="42.61%" stopColor="#E8C4E5" />
              <stop offset="97.66%" stopColor="#CD82BB" />
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <polygon
            points="0,100 100,100 50,0"
            fill="url(#triangleGradient)"
            filter="url(#blur)"
          />
        </svg>
        <div className="relative flex flex-col items-center max-w-2xl px-4 mb-2">
          <h1 className="font-karantina text-6xl mt-2 mb-6">Photo Gallery</h1>
          <h2 className="font-karantina text-1xl">Musical Name</h2>
          <ImageGallery images={images}></ImageGallery>
          <MusicalSection isBoard={true} withArrows={true} />
        </div>
        <div className="relative w-[100px] h-[500px] bg-[#B34040]">
          <Footer
            footerClassName="bg-black mt-64 py-2"
            contentClassName="text-white flex flex-col gap-1"
            textClassName="text-center mb-2"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
