function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">© 2025 Woody Wu | Full Stack Software Developement</p>
        <p className="mt-2 text-sm">📍 Based in London, UK</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://www.linkedin.com/in/woody-w-779a65209/" target="_blank" className="hover:underline">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/moabzomg" target="_blank" className="hover:underline">
            💻 GitHub
          </a>
          <a href="wumantsun@gmail.com" className="hover:underline">
            📩 Email
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-400">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
    </footer>
  )
}
