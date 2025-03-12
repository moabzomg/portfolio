"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/experience": {
    name: "Experience",
  },
  "/activity": {
    name: "Beyond Work",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Hamburger Menu Button (only on mobile) */}
          <button
            className="lg:hidden flex items-center justify-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Menu (visible when hamburger is clicked) */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-0 left-0 right-0 bg-gray-800 bg-opacity-75 z-50 p-4 md:hidden`}
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-72">
              <div className="space-y-4">
                {Object.entries(navItems).map(([path, { name }]) => (
                  <Link
                    key={path}
                    href={path}
                    className="text-lg font-medium text-black dark:text-white py-2 px-4 block"
                    onClick={toggleMenu} // Close the menu when a link is clicked
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links (only visible on larger screens) */}
          <div className="hidden lg:flex space-x-6">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-4 text-lg font-medium"
              >
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
