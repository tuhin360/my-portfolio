import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import AOS from "aos";
import "aos/dist/aos.css";

const tabs = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", level: 0.85 },
      { name: "CSS", level: 0.7 },
      { name: "JavaScript", level: 0.7 },
      { name: "React", level: 0.8 },
      { name: "Tailwind CSS", level: 0.85 },
      { name: "Bootstrap", level: 0.6 },
      { name: "Redux Toolkit", level: 0.4 },
      { name: "Next.js", level: 0.55 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 0.8 },
      { name: "Express.js", level: 0.75 },
      { name: "MongoDB", level: 0.7 },
      { name: "Mongoose", level: 0.7 },
      { name: "Firebase", level: 0.65 },
      { name: "REST API", level: 0.8 },
      { name: "JWT", level: 0.7 },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", level: 0.9 },
      { name: "TypeScript", level: 0.45 },
      { name: "C", level: 0.7 },
      { name: "Python (basic)", level: 0.3 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", level: 0.85 },
      { name: "GitHub", level: 0.85 },
      { name: "VS Code", level: 0.9 },
      { name: "Postman", level: 0.8 },
      { name: "Figma", level: 0.7 },
      { name: "Chrome DevTools", level: 0.75 },
      { name: "Vercel", level: 0.8 },
      { name: "Netlify", level: 0.75 },
    ],
  },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="skill"
      className="w-full max-w-7xl mx-auto mt-16 md:mt-24 px-4"
    >
      {/* Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Skill
        </h1>
        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        <p className="text-gray-300 mt-6 text-lg font-medium" data-aos="fade-up">
          Highlighting my key skills and technologies
        </p>
      </div>

      {/* Tabs */}
      <nav
        className="flex flex-wrap justify-center gap-4 my-8"
        data-aos="fade-up"
      >
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-6 rounded-lg text-sm font-semibold transition duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
                    : "bg-[#1e293b] text-gray-300 hover:bg-purple-700 hover:text-white"
                }`}
              aria-current={isActive ? "true" : "false"}
              aria-label={`Select ${tab.label} skills tab`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {tabs[activeTab].skills.map((skill, i) => (
          <article
            key={skill.name}
            className="bg-[#1e293b] rounded-lg p-4 w-full flex flex-col items-center text-white shadow-md"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <GaugeChart
              id={`gauge-${activeTab}-${i}`}
              nrOfLevels={30}
              percent={skill.level}
              colors={["#4c1d95", "#7e22ce", "#ec4899"]}
              arcWidth={0.3}
              textColor="#fff"
              needleColor="#a855f7"
              needleBaseColor="#a855f7"
              animate={true}
              style={{ width: 150 }}
            />
            <h3 className="text-lg font-semibold mt-4">{skill.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skill;
