import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.section
      ref={ref}
      id="contact"
      className="py-10 text-center"
      style={props}
    >
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-10 text-violet-400">
        Get In Touch
      </h2>
      <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
        I'm always open to new opportunities and collaborations.  
        Feel free to reach out directly through the links below!
      </p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-10">
        <animated.a
          href="mailto:harshbhushangupta@gmail.com"
          className="bg-gray-800 text-gray-300 p-7 rounded-full shadow-2xl transform hover:scale-125 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 200,
          })}
        >
          <Mail size={48} />
        </animated.a>
        <animated.a
          href="https://github.com/guptaababa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-gray-300 p-7 rounded-full shadow-2xl transform hover:scale-125 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 400,
          })}
        >
          <Github size={48} />
        </animated.a>
        <animated.a
          href="https://www.linkedin.com/in/harsh-gupta-001767216/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-gray-300 p-7 rounded-full shadow-2xl transform hover:scale-125 transition-transform duration-300 hover:bg-gray-700"
          style={useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.8)",
            delay: 600,
          })}
        >
          <Linkedin size={48} />
        </animated.a>
      </div>
    </animated.section>
  );
};

export default Contact;
