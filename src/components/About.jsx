import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: inView ? 200 : 0,
    config: { tension: 170, friction: 20 },
  });

  // Arrays for different skill categories
  const programmingLanguages = ["Python", "Java", "C/C++", "SQL", "HTML", "CSS", "JavaScript", "Typescript"];
  const technicalSkills = [
    "Microsoft Suite",
    "Data/Business Analysis",
    "Machine Learning (ML)",
    "Artificial Intelligence (AI)",
    "Database Management System (DBMS, MongoDB)",
    "System Design",
    "Git/GitHub",
    "MySQL",
    "Front End Development",
  ];
  const frameworks = ["React.js", "Angular.js", "Node.js", "Tailwind CSS", "Bootstrap"];
  const languages = ["English", "Hindi", "French"];
  const softSkills = [
    "Strategic Thinking",
    "Communication Skills",
    "Problem Solving",
    "Time Management",
    "Risk Management",
    "Team Work",
  ];

  return (
    <section id="about" className="py-10 bg-gray-950 rounded-3xl">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col items-center gap-6">

        {/* Title Above Photo */}
        <animated.div style={animationProps} className="text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-violet-400 mb-3">
            About Me
          </h2>
        </animated.div>

        {/* Profile Image */}
        <animated.div
          ref={ref}
          style={animationProps}
          className="w-52 h-52 rounded-full overflow-hidden 
                     border border-gray-700/50 bg-gray-800/40 backdrop-blur-md 
                     shadow-lg shadow-fuchsia-500/20"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQE0VQe7o-bzvQ/feedshare-shrink_1280/B56Zi7ou3DG4Ak-/0/1755494685998?e=1758758400&v=beta&t=4FVaysUfLQtElGEnmc66Df-VMN8_UhR7mVRHziuelT8"
            alt="Harsh Gupta profile picture"
            className="w-full h-full object-cover rounded-full"
          />
        </animated.div>

        {/* About Text & Other Sections */}
        <animated.div style={animationProps} className="flex-1 text-center w-full">
          <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Hi, I’m Harsh Bhushan Gupta, a software engineer skilled in front-end development with a passion for combining design with
            data-driven insights. I enjoy problem-solving, analyzing business aspects, and
            building impactful applications.
          </p>

          {/* Education Section */}
          <div className="bg-gray-950 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-lg shadow-fuchsia-500/20 mb-6 text-center w-full">
            <h3 className="text-2xl font-semibold text-violet-300 mb-6">🎓 Education</h3>
            <ul className="space-y-6 text-gray-300 text-lg max-w-2xl mx-auto">
              <li>
                <span className="font-bold text-fuchsia-400">Vellore Institute of Technology, Vellore</span>
                <br /> B.Tech in Information Technology - <span className="font-semibold">8.0 CGPA</span>
              </li>
              <li>
                <span className="font-bold text-fuchsia-400">FIITJEE Junior College, Hyderabad</span>
                <br /> Class 12th – <span className="font-semibold">82.6％</span>
              </li>
              <li>
                <span className="font-bold text-fuchsia-400">Narayana E-techno School, Mumbai</span>
                <br /> Class 10th – <span className="font-semibold">85.6％</span>
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-950 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-lg shadow-fuchsia-500/20 mb-6 text-center w-full">
            <h3 className="text-2xl font-semibold text-violet-300 mb-6">💻 Skills</h3>

            {/* Programming Languages */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {programmingLanguages.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                    text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gradient-to-r to-fuchsia-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Technical Skills</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {technicalSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                    text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Frameworks</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {frameworks.map((fw, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                    text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:text-white transition"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Languages</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                    text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:text-white transition"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-xl font-semibold text-fuchsia-400 mb-3">Soft Skills</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                    text-gray-300 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gradient-to-r from-violet-400 to-fuchsia-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-gray-950 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-lg shadow-fuchsia-500/20 text-center w-full">
            <h3 className="text-2xl font-semibold text-violet-300 mb-4">📜 Certifications</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              <a
                href="https://www.hackerrank.com/certificates/iframe/eaa1988ca9d4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-fuchsia-400 hover:text-violet-300 transition"
              >
                HackerRank SQL (Intermediate) Certification
              </a>
              : This certification tests advanced SQL skills for database querying and management.
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
