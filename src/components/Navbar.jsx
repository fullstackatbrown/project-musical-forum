"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
/**
 * Navbar Component
 *
 * ## Props:
 * @param {Object[]} navItems - List of navigation links.
 * @param {string} navItems[].name - The display name of the navigation item.
 * @param {string} navItems[].path - The corresponding route path for the navigation item.
 *
 * @param {boolean} [isAdmin=false] - Determines whether the admin-specific link ("Show Poster") is shown.
 * @param {string} [bgColor="#000000"] - Background color of the navbar.
 * @param {string} [textColor="#FFFFFF"] - Text color of the navbar.
 * @param {string} [fontSize="text-[24px]"] - Tailwind class controlling the font size of nav items.
 * @param {string} [logo="/mf-logo.jpeg"] - Logo image URL.
 * @param {string} [textHoverColor="#CD82BB"] - Text color when hovering over navigation links.
 * @param {string} [navItemWidth="w-[150px]"] - Tailwind class for the width of each nav item.
 * @param {string} [navItemHeight="h-[80px]"] - Tailwind class for the height of each nav item.
 *
 * Example usage:
 * const navItems = [
 * { name: "About Us", path: "/aboutUs" },
 * { name: "Meet the Board", path: "/meetTheBoard" },
 * { name: "Alumni", path: "/alumni" },
 * ......
 * ]
 *
 * <Navbar navItems={navItems}/>
 * or
 * <Navbar navItems={navItems} isAdmin={true} bgColor="#333333" textColor="#FFFFFF" fontSize="text-[20px]" logo="/custom-logo.png" textHoverColor="#FF5733" navItemWidth="w-[120px]" navItemHeight="h-[60px]"/>
 */

export function Navbar({
  navItems,
  isAdmin = false,
  bgColor = "#000000",
  textColor = "#FFFFFF",
  fontSize = "text-[24px]",
  logo = "/mf-logo.jpeg",
  textHoverColor = "#CD82BB",
  navItemWidth = "w-[150px]",
  navItemHeight = "h-[80px]",
}) {
  const navList = [...navItems];

  //Mobile navbar toggle button control
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);

  // Get the current URL path to determine the active link.
  const pathname = usePathname();

  //If the user is admin
  if (isAdmin) {
    navList.push({ name: "Show Poster", path: "/showPoster" });
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex items-center w-full">
        {/* Logo & Mobile Toggle Button */}
        <div className="flex items-center min-w-[80px] z-10 mx-auto md:mx-0">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Musical Forum Logo"
              className="h-20 w-20 object-contain"
            />
          </Link>
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileBarOpen(!isMobileBarOpen)}
          >
            {isMobileBarOpen ? (
              <svg
                className={`w-6 h-6 hover:stroke-[${textHoverColor}]`}
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
                className={`w-6 h-6 hover:stroke-[${textHoverColor}]`}
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
        <div className="hidden md:flex">
          {navList.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                title={item.name}
                className={`${navItemWidth} ${navItemHeight} flex items-center justify-center
                  font-acad ${fontSize} leading-[2rem] tracking-normal text-center
                  hover:text-[${textHoverColor}] transition duration-300
                  ${isActive ? `text-[${textHoverColor}]` : ""}
                  `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile navbar */}
        {isMobileBarOpen && (
          <div
            style={{ backgroundColor: bgColor }}
            className="md:hidden absolute left-0 top-8 w-full transition-all duration-300 overflow-hidden pt-12 pb-2"
          >
            <div className="w-40 flex flex-col mx-auto">
              {navList.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block text-sm py-1 pl-10 font-acad hover:text-[${textHoverColor}] transition duration-300`}
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
