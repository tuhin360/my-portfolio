import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTimes,
  FaCodeBranch,
  FaServer,
  FaExternalLinkAlt,
  FaChevronDown,
} from "react-icons/fa";
import bistroImg from "../../assets/bistro.jpg";
import movieImg from "../../assets/movie-search.png";
import justiceImg from "../../assets/justice.png";
import geometryImg from "../../assets/geometry.png";
import universityImg from "../../assets/university.png";
import omexoEducationImg from "../../assets/omexoEducation.png";
import eCommerceImg from "../../assets/ecommerce.jpg";
import taskManagerImg from "../../assets/task.jpg";
import weatherAppImg from "../../assets/weather.jpg";
import chatAppImg from "../../assets/chat.jpg";
import portfolioImg from "../../assets/portfolio.jpg";
import weatherSphereImg from "../../assets/weatherSphere.png";
import myPortfolio from "../../assets/myPortfolio.png";

const allProjects = [
  {
    title: "Bistro Boss Restaurant",
    description:
      "The Ultimate Online Restaurant Ordering & Management Platform",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vite",
      "React Router",
      "DaisyUI",
      "React Hook Form",
      "Stripe",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase Hosting",
    ],
    image: `${bistroImg}`,
    frontend: "https://github.com/tuhin360/bistro-boss-frontend",
    backend: "https://github.com/tuhin360/bistro-boss-backend",
    live: "https://bistro-boss-97f52.web.app/",
  },
  {
    title: "Movie Search App",
    description: "Find Movies You'll Enjoy Without the Hassle",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS 4",
      "Appwrite",
      "React Use",
      "JavaScript",
    ],
    image: `${movieImg}`,
    frontend: "https://github.com/tuhin360/react-nineteen",
    backend: "https://github.com/tuhin360/react-nineteen",
    live: "https://fascinating-bonbon-a9e400.netlify.app/",
  },
  {
    title: "My Portfolio",
    description: "My Personal Portfolio Website",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "EmailJS",
      "AOS (Animate On Scroll)",
      "React Icons",
      "React Router DOM",
      "React Particles/TSParticles",
      "React Toastify",
      "React Tooltip",
      "React Parallax Tilt",
      "React Typing Effects",
      "React Circular Progressbar",
      "React Gauge Chart",
    ],
    image: `${myPortfolio}`,
    frontend: "https://github.com/tuhin360/my-portfolio",
    live: "https://my-portfolio-pi-one-76.vercel.app/",
  },
  {
    title: "WeatherSphere",
    description: "Get real-time weather forecasts by searching any city",
    technologies: [
      "React 19",
      "OpenWeatherMap API",
      "AOS (Animate On Scroll)",
      "React Icon",
      "Vite",
      "CSS",
    ],
    image: `${weatherSphereImg}`,
    frontend: "https://github.com/tuhin360/weather-app",
    live: "https://weather-8zksuclzm-tuhin360s-projects.vercel.app/",
  },
  {
    title: "Legal House",
    description: "we Provide Effective Legal Solutions.",
    technologies: ["HTML", "CSS"],
    image: `${justiceImg}`,
    frontend: "https://github.com/tuhin360/legal-house",
    live: "https://dreamy-moxie-2e8ab2.netlify.app/",
  },
  {
    title: "Edumodo University",
    description: "World Leading University for the best career",
    technologies: ["HTML", "CSS"],
    image: `${universityImg}`,
    frontend: "https://github.com/tuhin360/edumodo-project",
    live: "https://capable-froyo-d4b4bb.netlify.app/#",
  },
  {
    title: "Geometry Genius",
    description:
      "Explores shapes, sizes, relative positions of figures, and the properties of space.",
    technologies: ["HTML", "JavaScript"],
    image: `${geometryImg}`,
    frontend: "https://github.com/tuhin360/geometry-genius",
    live: "https://dreamy-blancmange-b006a1.netlify.app/",
  },
  {
    title: "Online Education Platform (Omexo Education)",
    description:
      "We are providing high-quality online courses to improve your skill.",
    technologies: ["HTML", "CSS"],
    image: `${omexoEducationImg}`,
    frontend: "https://github.com/tuhin360/omexo-education",
    live: "https://ornate-scone-b8c6f9.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern online shopping experience with secure checkout",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    image: `${eCommerceImg}`,
    frontend: "https://github.com/tuhin360/ecommerce-frontend",
    backend: "https://github.com/tuhin360/ecommerce-backend",
    live: "https://ecommerce-demo.example.com",
  },
  {
    title: "Task Management App",
    description: "Organize your work and boost productivity",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    image: `${taskManagerImg}`,
    frontend: "https://github.com/tuhin360/task-manager",
    live: "https://task-manager-demo.example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with interactive maps",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: `${weatherAppImg}`,
    frontend: "https://github.com/tuhin360/weather-app",
    live: "https://weather-dashboard.example.com",
  },
  {
    title: "Realtime Chat Application",
    description: "Instant messaging with socket.io and React",
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    image: `${chatAppImg}`,
    frontend: "https://github.com/tuhin360/chat-app-frontend",
    backend: "https://github.com/tuhin360/chat-app-backend",
    live: "https://chat-app-demo.example.com",
  },
  {
    title: "Portfolio Template",
    description: "Modern responsive portfolio template for developers",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    image: `${portfolioImg}`,
    frontend: "https://github.com/tuhin360/portfolio-template",
    live: "https://portfolio-template.example.com",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleProjects(showAll ? 6 : allProjects.length);
  };

  const displayedProjects = showAll
    ? allProjects
    : allProjects.slice(0, visibleProjects);

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4" id="project">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          data-aos="fade-down"
        >
          Projects
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        <p
          className="text-gray-300 mt-6 text-lg font-medium"
          data-aos="fade-up"
        >
          Showcasing my favorite projects built with modern web technologies.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 rounded-lg cursor-pointer overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)]"
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-3 py-1 text-xs font-medium shadow-md transition duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {allProjects.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={toggleShowAll}
            className="flex items-center gap-2 mt-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            {showAll ? "Show Less" : "See More Projects"}
            <FaChevronDown
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 transition-opacity duration-300">
          <div className="relative bg-gray-900 rounded-xl shadow-2xl border border-purple-600 p-6 w-full max-w-md animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-white text-xl hover:text-red-400 transition"
            >
              <FaTimes />
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-52 object-cover rounded-lg mb-4 shadow-md"
            />

            {/* Title */}
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 drop-shadow-md animate-fadeIn">
              {selectedProject.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {selectedProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="space-y-2 text-sm">
              {selectedProject.frontend && (
                <a
                  href={selectedProject.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <FaCodeBranch /> Frontend Code
                </a>
              )}
              {selectedProject.backend && (
                <a
                  href={selectedProject.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  <FaServer /> Backend Code
                </a>
              )}
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300"
              >
                <FaExternalLinkAlt /> Live Site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
