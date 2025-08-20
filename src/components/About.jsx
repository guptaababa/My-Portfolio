import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 170, friction: 20 },
  });

  return (
    <section id="about" className="py-20 bg-gray-950 rounded-3xl ">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Profile Image */}
        <animated.div
          ref={ref}
          style={animationProps}
          className="w-48 h-48 rounded-full overflow-hidden 
                     border border-gray-700/50 bg-gray-800/40 backdrop-blur-md 
                     shadow-lg shadow-fuchsia-500/20"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5622AQE0VQe7o-bzvQ/feedshare-shrink_1280/B56Zi7ou3DG4Ak-/0/1755494685998?e=1758758400&v=beta&t=4FVaysUfLQtElGEnmc66Df-VMN8_UhR7mVRHziuelT8"
            alt="Harsh Gupta profile picture"
            className="w-full h-full object-cover rounded-full"
          />
        </animated.div>

        {/* About Text */}
        <animated.div
          style={animationProps}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-fuchsia-400 mb-6">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I’m Harsh Bhushan Gupta, a software engineer skilled in front-end
            development and passionate about combining design with data-driven
            insights. I enjoy problem-solving, analyzing business aspects, and
            building impactful applications.
          </p>

          {/* Education Section */}
          <div
            className="bg-gray-950 backdrop-blur-md 
                       border border-gray-700/50 rounded-2xl 
                       p-6 shadow-lg shadow-fuchsia-500/20"
          >
            <h3 className="text-2xl font-semibold text-violet-300 mb-4">
              🎓 Education
            </h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li>
                <span className="font-bold text-fuchsia-400">
                  Vellore Institute of Technology, Vellore
                </span>
                <br />
                B.Tech in Information Technology – CGPA :{" "}
                <span className="font-semibold">8.0</span>
              </li>
              <li>
                <span className="font-bold text-fuchsia-400">
                  FIITJEE Junior College, Hyderabad
                </span>
                <br />
                Class 12th – <span className="font-semibold">82.6％</span>
              </li>
              <li>
                <span className="font-bold text-fuchsia-400">
                  Narayana E-techno School, Mumbai
                </span>
                <br />
                Class 10th – <span className="font-semibold">85.6％</span>
              </li>
            </ul>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
