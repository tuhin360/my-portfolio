import React from "react";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skill", id: "skill" },
    { name: "Experience", id: "experience" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/jahediAlamTuhin/",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={24} />,
      url: "https://x.com/ja_tuhin",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      url: "https://www.instagram.com/______tuhin________/",
      color: "hover:text-red-300",
    },
  ];

  return (
    <section className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ">
      <div className="container mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-2xl font-semibold text-purple-500 mb-4">
          Jahedi Alam Tuhin
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-lg mb-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-white hover:text-purple-400 transition-colors duration-300 ease-in-out focus:outline-none focus:underline cursor-pointer"
              aria-label={`Scroll to ${item.name} section`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 text-gray-400 mb-6 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`transition-all duration-300 ease-in-out ${social.color}  hover:scale-110 transform hover:rotate-0 focus:scale-110 focus:outline-none`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Jahedi Alam Tuhin. All rights
        reserved.
      </p>
    </section>
  );
};

export default Footer;
