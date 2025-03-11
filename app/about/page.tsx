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
  "/webtools": {
    name: "Web Tools",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navigation menu on mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className="mb-16 tracking-tight">
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Hamburger Menu (only on mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2"
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

          {/* Navigation links (mobile menu pop-up) */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } fixed inset-0 z-50 bg-gray-800 bg-opacity-75 justify-center items-center`}
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-72 md:w-96">
              <div className="space-y-4 flex flex-col">
                {Object.entries(navItems).map(([path, { name }]) => (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-4 text-lg font-medium block"
                    onClick={toggleMenu} // Close the menu when a link is clicked
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
