"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Navbar Component
 *
 * Props:
 * @param {Array} navItems - An array of navigation items. Each item should be an object with:
 *                           - name: The text to display.
 *                           - path: The URL path to navigate to.
 * @param {boolean} [isAdmin=false] - If true, adds an additional "Show Poster" link.
 * @param {string} [bgColor="#000000"] - The background color of the navbar.
 * @param {string} [textColor="#FFFFFF"] - The text color for the navbar.
 *
 * Usage Example:
 *
 * import Navbar from "@/components/Navbar";
 *
 * const navItems = [
 *   { name: "About Us", path: "/aboutUs" },
 *   { name: "Meet the Board", path: "/meetTheBoard" },
 *   { name: "Alumni", path: "/alumni" },
 *   // ... other nav items
 * ];
 */

export default function Navbar({
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
        <div className="flex items-center w-40 md:w-auto px-2 z-10 mx-auto md:mx-0 md:border-r-4 md:border-r-white">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-lg font-bold my-4 md:text-xl whitespace-nowrap">
              Musical Forum
            </h1>
          </Link>
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 w-8 h-8 flex items-center justify-center ml-auto"
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
