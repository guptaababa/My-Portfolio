import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Engineer - Clover Infotech Pvt Ltd.",
      title2: "Hi",
      date: "August, 2025 - Present",
      description: "Working as a Software Engineer for the client ICICI Bank in Hyderabad. Working with the frontend team to rectify the bugs in ICICI web application using technologies like React.js",
      technologies: ["React.js", "Javascript", "Tailwind CSS", "HTML"],
    },
    {
      title: "Software Developer Engineer Intern - Softforce Consultants Pvt. Ltd.",
      date: "September, 2023 - November, 2023",
      description:
        "Developed and deployed 5+ interactive web applications using HTML, CSS, JavaScript, React, and Node.js. Collaborated with cross-functional teams and utilized SQL and MS Excel for data quality analysis.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "SQL",
        "MS Excel",
      ],
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <animated.section ref={ref} id="experiences" className="py-10 ">
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-12 text-violet-400">
        My Experiences
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            inView={inView}
            index={index}
          />
        ))}
      </div>
    </animated.section>
  );
};

const ExperienceCard = ({ experience, inView, index }) => {
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: inView ? 200 + index * 150 : 0,
  });

  return (
    <animated.div
      style={props}
      className="bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-2xl font-bold text-fuchsia-300 mb-2">
        {experience.title}
      </h3>
      <p className="text-sm text-gray-400 mb-2 italic">{experience.date}</p>
      <p className="text-gray-300 text-base mb-4">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
            text-gray-300 px-3 py-1 rounded-full text-s font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
    </animated.div>
  );
};

export default Experiences;
