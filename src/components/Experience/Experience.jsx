import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    role: "Frontend Web Developer Intern",
    company: "Biswas Digital Solution",
    date: "May 2024 - July 2024",
    description:
      "Designed and implemented modern UIs using React and Tailwind CSS with a focus on clean design, responsiveness, and user experience.",
  },
  {
    role: "Full Stack Web Developer Trainee",
    company: "Programming Hero",
    date: "January 2023 – April 2024",
    description:
      "Completed a comprehensive full stack web development program focusing on HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Gained hands-on experience through project-based learning.",
  },
  {
    role: "MERN Stack Developer (Self-Practice)",
    company: "Personal Projects",
    date: "May 2024 – Present",
    description:
      "Developing full-stack web applications using MongoDB, Express.js, React, and Node.js. Implemented features like authentication (JWT & Firebase), CRUD operations, REST APIs, and responsive UIs using Tailwind CSS.",
  },
  {
    role: "Frontend Project Developer",
    company: "Portfolio & Practice",
    date: "Jun 2024 – Present",
    description:
      "Built multiple real-world UI clones and components using React and Tailwind CSS. Gained hands-on experience with React Router, custom hooks, reusable components, and responsive layout design.",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4 mb-40"
    >
      {/* Section Header */}
      <header className="text-center mb-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          data-aos="fade-down"
        >
          Experience
        </h1>
        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <p
          className="text-gray-300 mt-6 text-lg font-medium"
          data-aos="fade-up"
        >
          A timeline of the roles I’ve taken and the journey I’ve walked.
        </p>
      </header>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute sm:left-1/2 left-4 sm:translate-x-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>

        {/* Timeline Items */}
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <article
              key={index}
              className={`mb-16 flex flex-col sm:items-center ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="w-6 h-6 rounded-full bg-purple-600 shadow-[0_0_15px_5px_rgba(168,85,247,0.6)] animate-ping-slow border-4 border-[#0f172a]"></div>

              {/* Experience Card */}
              <div
                className={`bg-white/5 backdrop-blur-md border border-purple-500/10 p-6 rounded-xl shadow-xl text-left sm:w-1/2 mt-6 sm:mt-0 sm:mx-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-500/40 `}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
