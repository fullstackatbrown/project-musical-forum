"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar({
  navItems,
  isAdmin = false,
  bgColor = "#000000",
  textColor = "#FFFFFF",
}) {
  const navList = [...navItems];

  //Mobile navbar toggle button control
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);

  // Get the current URL path to determine the active link.
  const pathname = usePathname();

  //If the user is admin
  if (isAdmin) {
    navItems.push({ name: "Show Poster", path: "/showPoster" });
  }
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex items-center px-4 w-full">
        {/* Logo & Mobile Toggle Button */}
        <div className="flex items-center w-40 md:w-auto px-2 z-10 mx-auto md:mx-0">
          {/* Logo */}
          <Link href="/">
            <img
              src="/mf-logo.jpeg"
              alt="Musical Forum Logo"
              className="h-20 w-20 md:h-24 md:w-24 object-contain"
            />
          </Link>
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileBarOpen(!isMobileBarOpen)}
          >
            {isMobileBarOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navbar */}
        <div className="hidden md:flex font-bold flex-nowrap px-1 space-x-1 xl:space-x-2">
          {navList.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                title={item.name}
                className={`
                  py-1 text-xs hover:text-[#CD82BB] transition duration-300 truncate max-w-[60px] lg:text-[0.8rem] lg:overflow-visible lg:max-w-none xl:text-[0.9rem] 2xl:text-base
                  ${isActive ? "text-[#CD82BB]" : ""}
                  `}
              >
                <span className="mr-1 ml-2 lg:mr-0.5 lg:ml-1 xl:mr-1 xl:ml-2">
                  ·
                </span>
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile navbar */}
        {isMobileBarOpen && (
          <div
            style={{ backgroundColor: bgColor }}
            className="md:hidden absolute left-0 top-0 w-full transition-all duration-300 overflow-hidden pt-10 pb-2"
          >
            <div className="w-40 flex flex-col mx-auto">
              {navList.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block text-sm p-1 hover:bg-[#CD82BB] hover:text-black transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
