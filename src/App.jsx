/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Project from "./components/Project/Project";

function App() {
  const [showParticles, setShowParticles] = useState(false);
  const isMobile = window.innerWidth < 768;

  // Delay loading particles for better perceived speed
  useEffect(() => {
    const timer = setTimeout(() => setShowParticles(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
      {/* 🌌 Particle Background */}
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          className="absolute inset-0 z-0"
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "#020617" } },
            fpsLimit: isMobile ? 30 : 60,
            interactivity: {
              events: {
                onClick: { enable: !isMobile, mode: "push" },
                onHover: { enable: !isMobile, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 2 },
                repulse: { distance: 60, duration: 0.4 },
              },
            },
            particles: {
              number: {
                value: isMobile ? 10 : 25, // fewer on mobile
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: { value: "#a78bfa" }, // Soft purple
              links: {
                enable: true,
                distance: isMobile ? 70 : 120, // reduce link distance on mobile
                color: "#a78bfa",
                opacity: 0.4,
                width: 1,
              },
              collisions: { enable: false },
              move: {
                enable: true,
                speed: isMobile ? 0.8 : 1.2, // smoother on mobile
                direction: "none",
                outModes: { default: "out" },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              shape: { type: "circle" },
              size: {
                value: { min: 1, max: 3 },
                random: true,
              },
            },
            detectRetina: true,
          }}
        />
      )}

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
        <Skill />
        <Experience />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
