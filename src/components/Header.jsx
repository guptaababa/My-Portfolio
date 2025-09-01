import React from "react";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const Header = ({ setActiveSection, activeSection }) => {
  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "experiences", label: "Experiences", icon: <Briefcase size={20} /> },
    { id: "projects", label: "Projects", icon: <Code2 size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <header className="w-full flex justify-center py-6 px-4 bg-gray-950 sticky top-0 z-50">
      {/* Aesthetic navbar with glass effect */}
      <nav className="flex space-x-6 px-8 py-3 border border-gray-700/40 rounded-3xl bg-gray-900/50 backdrop-blur-md shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "bg-gradient-to-r from-violet-400 to-fuchsia-600 text-white shadow-md shadow-fuchsia-500/30"
                : "text-gray-400 hover:text-white hover:bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
