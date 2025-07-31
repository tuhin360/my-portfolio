import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const menuItems = React.useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "skill", label: "Skill" },
      { id: "experience", label: "Experience" },
      { id: "work", label: "Work" },
      { id: "contact", label: "Contact" },
      { id: "education", label: "Education" },
    ],
    []
  );

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu
    }
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = menuItems.map((item) => {
        const section = document.getElementById(item.id);
        return section
          ? { id: item.id, offset: section.offsetTop - 100 }
          : { id: item.id, offset: Infinity };
      });

      const current = offsets.filter((item) => scrollY >= item.offset).pop();

      if (current && current.id !== activeId) {
        setActiveId(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId, menuItems]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white px-4 py-5 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tuhin
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <li key={item.id} className="group ">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`outline-none focus:outline-none relative py-1 transition text-sm hover:text-purple-400 cursor-pointer ${
                  activeId === item.id ? "text-purple-400" : ""
                }`}
              >
                {item.label}
                {/* Underline Animation */}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0 " />
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <a
            href="https://github.com/tuhin360"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-purple-400 transition" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl z-50" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0f172a] text-white px-6 py-4 shadow-lg z-50
          transform transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex justify-end mb-6">
          <FiX className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        <div className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`block w-full text-left py-2 hover:text-purple-400 transition outline-none focus:outline-none ${
                activeId === item.id ? "text-purple-400" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-4 text-xl pt-6 ">
          <a
            href="https://github.com/tuhin360"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-purple-400 transition" />
          </a>
          <a
            href="www.linkedin.com/in/jahedi-alam-tuhin-a90289261"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
