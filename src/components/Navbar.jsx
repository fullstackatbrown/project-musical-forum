"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
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
  const half = Math.ceil(navList.length / 2);
  const leftItems = navList.slice(0, half);
  const rightItems = navList.slice(half);

  //Mobile navbar toggle button control
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Get the current URL path to determine the active link.
  const pathname = usePathname();

  //If the user is admin
  if (isAdmin) {
    navList.push({ name: "Show Poster", path: "/showPoster" });
  }

  const renderNavItem = (item) => {
    const isActive = pathname === item.path;

    if (item.dropdown) {
      return (
        <div
          key={item.name}
          className={`relative group ${navItemWidth} ${navItemHeight} flex items-center justify-center`}
        >
          <span
            className={`font-acad ${fontSize} uppercase cursor-default hover:text-[${textHoverColor}]`}
          >
            {item.name}
          </span>
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block
          bg-black shadow-lg z-50 text-white whitespace-nowrap min-w-[200px] text-sm font-acad
          transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          >
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.path}
                className="block px-4 py-2 hover:bg-[#CD82BB]/80 transition-colors duration-200"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.path}
        title={item.name}
        className={`${navItemWidth} ${navItemHeight} flex items-center justify-center
        font-acad ${fontSize} leading-[2rem] tracking-normal text-center
        hover:text-[${textHoverColor}] transition duration-300 uppercase
        ${isActive ? `text-[${textHoverColor}]` : ""}
        `}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center w-full">
        {/* Desktop left navbar */}
        <div className="hidden lg:flex justify-end gap-8">
          {leftItems.map(renderNavItem)}
        </div>

        {/* Logo & Mobile Toggle Button */}
        <div className="w-full lg:col-start-2 flex justify-center items-center relative z-10">
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
            className="lg:hidden p-2 w-8 h-8 flex items-center justify-center"
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
        <div className="hidden lg:flex justify-start gap-8">
          {rightItems.map(renderNavItem)}
        </div>

        {/* Mobile navbar */}
        {isMobileBarOpen && (
          <div
            style={{ backgroundColor: bgColor }}
            className="lg:hidden absolute left-0 top-8 w-full transition-all duration-300 overflow-hidden pt-12 pb-2"
          >
            <div className="w-52 flex flex-col mx-auto">
              {navList.map((item, index) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isOpen = openIndex === index;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (hasDropdown) {
                          setOpenIndex(isOpen ? null : index);
                        } else {
                          setIsMobileBarOpen(false);
                        }
                      }}
                      className="w-full text-left text-sm py-1 pl-[4.3rem] font-acad flex items-center hover:text-[#CD82BB] transition duration-300"
                    >
                      {item.name}
                      {hasDropdown &&
                        (isOpen ? (
                          <KeyboardArrowUpOutlinedIcon
                            sx={{ fontSize: "small" }}
                          />
                        ) : (
                          <KeyboardArrowDownOutlinedIcon
                            sx={{ fontSize: "small" }}
                          />
                        ))}
                    </button>

                    {hasDropdown && isOpen && (
                      <div className="pl-[4.5rem] space-y-1 mt-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block text-sm py-1 font-acad hover:text-[#CD82BB] transition duration-300"
                            onClick={() => setIsMobileBarOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
