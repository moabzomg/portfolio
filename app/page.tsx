"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-8 text-white bg-black">
      <div className="relative animate__animated animate__fadeInUp mb-8">
        <img
          src="/images/rubixcube.png"
          alt="Rubik's Cube"
          className="w-48 h-48 object-cover animate-float"
        />
      </div>

      <h1 className="title mb-8 text-3xl font-extrabold tracking-tighter text-center animate__animated animate__delay-1s">
        Striving for the best, one step at a time.
      </h1>

      <p className="mb-4 text-lg max-w-xl text-center" data-aos="fade-up">
        I’m a perfectionist who always strives for the best. I aim for success,
        even if it means thinking a bit too much about the small details. When
        it comes to work, I jump right in, ready to face any challenges with
        focus and a smile.
      </p>

      <a href="/Woody_CV.pdf" download>
        <button className="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700 hover:cursor-pointer transition-colors mt-8 flex items-center space-x-2">
          <span className="text-lg">Resume 📥</span>
          <svg
            className="w-5 h-5 transform transition-all duration-300 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </a>
    </section>
  );
}
