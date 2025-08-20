import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="px-6 py-12 max-w-5xl mx-auto">
        {activeSection === "home" && <Hero />}
        {activeSection === "about" && <About />}
        {activeSection === "experiences" && <Experiences />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;