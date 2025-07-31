import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-stack e-commerce platform with MERN stack including authentication and payment integration.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blog Application",
    description:
      "Created a blog app where users can post articles, comment, and like posts.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Manager App",
    description:
      "Built a task management app with user authentication and real-time updates.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
  },
 {
    title: "Social Media Dashboard",
    description:
      "Designed and developed a responsive dashboard for tracking social media analytics.",
    technologies: ["React", "Chart.js", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weather Forecast App",
    description:
      "Created a weather app fetching data from external API with modern UI.",
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];
const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4" id="project">
      <div className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          data-aos="fade-down"
        >
          Project
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        <p
          className="text-gray-300 mt-6 text-lg font-medium"
          data-aos="fade-up"
        >
          Showcasing my favorite projects built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
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
                    className="bg-purple-500 text-white rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
