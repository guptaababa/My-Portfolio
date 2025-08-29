import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    { 
      title: "Sign Language Recognition", 
      description: "A real-time system converting sign language to text and speech using hand gesture recognition and CNN models with 97% accuracy.", 
      technologies: ["Python", "Deep Learning", "CNN", "Tkinter"], 
      url: "https://github.com/guptaababa/Sign-Language-Recognition" 
    },
    { 
      title: "DSA Tracker", 
      description: "A tool for tracking DSA progress, providing performance insights, and setting practice goals for enhanced coding skills.", 
      technologies: ["React.js", "HTML", "CSS", "JavaScript"], 
      url: "https://github.com/guptaababa/DSA-Tracker" 
    },
    { 
      title: "Text-to-SQL converter", 
      description: "An NLP-driven tool that converts natural language queries into SQL statements with high accuracy for non-technical users.", 
      technologies: ["NLP", "SQL", "Mongo.DB"], 
      url: "https://github.com/guptaababa/Text-to-SQL" 
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <animated.section ref={ref} id="projects" className="py-10">
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-12 text-violet-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} inView={inView} index={index} />
        ))}
      </div>
    </animated.section>
  );
};

const ProjectCard = ({ project, inView, index }) => {
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: inView ? 200 + index * 150 : 0,
  });

  return (
    <animated.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={props}
      className="bg-gray-950 p-6 rounded-xl shadow-lg border border-gray-700 transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300 block"
    >
      <h3 className="text-2xl font-bold text-fuchsia-300 mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
    </animated.a>
  );
};

export default Projects;
