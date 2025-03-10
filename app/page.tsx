"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen p-8 text-white bg-black">
  {/* Welcome Headline */}
  <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-center animate__animated animate__fadeIn">
    Welcome to Woody Wu's Portfolio
  </h1>

  {/* Rubik's Cube with rotation animation */}
  <div className="relative animate__animated animate__fadeInUp mb-8">
    <img
      src="/images/rubixcube.png"
      alt="Rubik's Cube"
      className="w-48 h-48 object-cover animate-float"
    />
  </div>

  <h2 className="title mb-8 text-3xl font-extrabold tracking-tighter text-center animate__animated animate__delay-1s">
    Striving for the best, one step at a time.
  </h2>

  <p className="mb-4 text-lg max-w-xl text-center" data-aos="fade-up">
    I’m a perfectionist who always strives for the best. I aim for success, even if it means thinking a bit too much about the small details. When it comes to work, I jump right in, ready to face any challenges with focus and a smile.
  </p>

  {/* Get in Touch button linked to your email */}
  <a href="mailto:wumantsun@gmail.com">
    <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors mb-8">
      Get in Touch
    </button>
  </a>
</section>


  );
}
