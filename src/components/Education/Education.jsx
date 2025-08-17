import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Shahid Police Smrity School & College, Panchagarh",
    year: "2016",
    description:
      "Completed Secondary School Certificate in the Science stream with a focus on core academic subjects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mokbular Rahman Govt. College, Panchagarh",
    year: "2018",
    description:
      "Achieved Higher Secondary Certificate (HSC) in Science with emphasis on advanced studies.",
  },
  {
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "Green University of Bangladesh, Dhaka",
    year: "2024",
    description:
      "Comprehensive computer science program covering software development, algorithms, and database systems. Applied knowledge through practical projects.",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      className="w-full max-w-7xl mx-auto mt-20 md:mt-28 px-6 mb-40"
      id="education"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-wide"
          data-aos="fade-down"
        >
          Education
        </h1>
        <div className="w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 shadow-lg" />
        <p
          className="text-gray-300 mt-8 max-w-xl mx-auto text-lg font-medium tracking-wide"
          data-aos="fade-up"
        >
          A glimpse into my academic journey.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-blue-500 rounded-full h-full shadow-xl" />

        {/* Timeline Items */}
        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`mb-20 flex flex-col items-center md:flex-row md:items-start ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot with Graduation Cap Icon */}
              <div className="z-20 relative">
                <div className="w-8 h-8 rounded-full border-4 border-white shadow-lg bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center">
                  <FaGraduationCap className="text-white text-xl" />
                </div>

              </div>

              {/* Education Card */}
              <div
                className={`bg-white/5 backdrop-blur-md border border-purple-500/10 rounded-2xl shadow-2xl p-8 max-w-lg w-full mt-6 md:mt-0 ${
                  isLeft ? "md:ml-10" : "md:mr-10"
                } transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-purple-500/40`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-3xl font-bold text-white tracking-wide mb-2">
                  {edu.degree}
                </h3>
                <p className="text-pink-400 font-semibold mb-1">
                  {edu.institution}
                </p>
                <p className="text-gray-400 italic mb-4">{edu.year}</p>
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
