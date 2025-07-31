import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="about"
      className="relative flex flex-col-reverse md:flex-row justify-between items-center mx-4 my-8 md:my-12"
    >
      {/* Text Content */}
      <div
        className="relative z-10 md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        data-aos="fade-right"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I am
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Jahedi Alam Tuhin
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#8245ec] mb-4">
          <span className="text-white">I am a </span>
          <span>
            <Typewriter
              words={[
                "Frontend Web Developer",
                "MERN Stack Developer",
                "React Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h3>
        <p className="text-base sm:text-lg md:text-2xl text-white mb-4 leading-relaxed">
          I’m a passionate MERN Stack Developer experienced in building modern,
          responsive, and user-friendly web applications. I love turning ideas
          into real-world solutions and am actively seeking full-time
          opportunities to grow as a developer.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=12pOaDe9Pwrv0Necpj2F3ufp0Dh1HWDpz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div
        className="relative z-10 md:w-1/2 flex justify-center"
        data-aos="fade-left"
      >
        <Tilt>
          <div
            className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden
            border-4 border-white shadow-2xl
            transform hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out"
          >
            <img
              src="/tuhin.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default About;
