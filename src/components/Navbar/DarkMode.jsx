import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  // 1. Initialize state with a function to avoid unnecessary localStorage reads on re-renders
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element.classList]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative flex items-center">
      {/* Light Mode Toggle Icon */}
      <button
        onClick={toggleTheme}
        className={`relative z-10 transition-opacity duration-300 focus:outline-none ${
          theme === "dark" ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        aria-label="Switch to Dark Mode"
      >
        <img
          src={LightButton}
          alt="Light Mode"
          className="w-12 cursor-pointer drop-shadow-md"
        />
      </button>

      {/* Dark Mode Toggle Icon */}
      <button
        onClick={toggleTheme}
        className="absolute right-0 focus:outline-none"
        aria-label="Switch to Light Mode"
      >
        <img
          src={DarkButton}
          alt="Dark Mode"
          className={`w-12 cursor-pointer drop-shadow-md transition-opacity duration-300 ${
            theme === "light" ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        />
      </button>
    </div>
  );
};

export default DarkMode;