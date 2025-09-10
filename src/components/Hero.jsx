import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaWhatsapp, FaEye } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  const textProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 500,
  });

  return (
    <animated.section
      id="home"
      style={props}
      className="relative flex flex-col items-center justify-start min-h-screen text-center px-6 pt-24 sm:pt-4 overflow-hidden"
    >
      {/* Background Spline (only visible in Hero section) */}
      <div className="absolute inset-0 -z-10 h-full">
        <Spline scene="https://prod.spline.design/xy7c8soMadQUPCwO/scene.splinecode" />
      </div>

      {/* Foreground Content */}
      <h1
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold 
                     text-transparent bg-clip-text bg-gradient-to-r 
                     from-violet-400 to-fuchsia-600 mb-6"
      >
        Hi, I'm Harsh Gupta
      </h1>

      <animated.p
        style={textProps}
        className="text-xl sm:text-2xl text-gray-300 max-w-2xl px-4 mb-8"
      >
        I build experiences that blend design, technology, and storytelling.
      </animated.p>

      <div className="flex space-x-4">
        {/* View Resume Button */}
        <animated.a
          href="https://drive.google.com/file/d/1h4CyH6XXjdsf-asL-blIuqOq3OcyMCTm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500
          hover:bg-fuchsia-700 transition-all duration-300 
          text-white font-semibold py-3 px-6 rounded-full shadow-lg 
          transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(217,70,239,0.6)]"
          style={useSpring({
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: 800,
          })}
        >
          <FaEye className="text-xl" /> View Resume
        </animated.a>

        {/* WhatsApp Button */}
        <animated.a
          href="https://wa.me/919152293824"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-green-700 to-emerald-600
          hover:bg-green-700 transition-all duration-300 
          text-white font-semibold py-3 px-6 rounded-full shadow-lg 
          transform hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(34,197,94,0.6)]"
          style={useSpring({
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: 900,
          })}
        >
          <FaWhatsapp className="text-xl" /> Contact me
        </animated.a>
      </div>
    </animated.section>
  );
};

export default Hero;
