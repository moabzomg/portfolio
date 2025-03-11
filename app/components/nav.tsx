import Link from "next/link";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/experience": {
    name: "Work Experience & Education",
  },
  "/activity": {
    name: "Beyond Work",
  },
  "/webtools": {
    name: "Web Tools",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          {/* Navigation links */}
          <div className="flex space-x-8 flex-nowrap">
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
