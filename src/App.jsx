import React, { useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Tilt from "react-parallax-tilt";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function App() {

    // Initialize particles
    const particlesInit = useCallback(async (engine) => {
      await loadSlim(engine); // Loads lightweight particle config
    }, []);
  
    // Optional: Log when particles are loaded
    const particlesLoaded = useCallback(async (container) => {
      // console.log("Particles loaded:", container);
    }, []);
  return (
    <div className="min-h-screen w-full bg-[#020617] relative overflow-x-hidden">
          <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              className="absolute inset-0 z-0"
              options={{
                fullScreen: { enable: false },
                background: { color: { value: "#020617" } },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                    resize: true,
                  },
                  modes: {
                    push: { quantity: 4 },
                    repulse: { distance: 100, duration: 0.4 },
                  },
                },
                particles: {
                  color: { value: "#ffffff" },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: { enable: true },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    outModes: { default: "bounce" },
                  },
                  number: { value: 40 },
                  opacity: { value: 0.5 },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 5 } },
                },
                detectRetina: true,
              }}
            />
      {/* 🔮 Purple Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139,92,246,0.4), transparent)`,
        }}
      />

      {/* ✅ Foreground Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <About />
        {/* <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
