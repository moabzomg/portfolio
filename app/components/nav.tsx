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
          >
            <svg
              className="w-6 h-6"
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

          {/* Navigation links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex space-x-8 flex-nowrap items-center justify-center`}
          >
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-2 px-6 text-lg font-medium"
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
