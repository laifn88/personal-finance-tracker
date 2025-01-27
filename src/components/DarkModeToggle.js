import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import the icons

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-light" : "bg-light text-dark"; // Apply body styles
  }, [darkMode]);

  return (
    <button
      className={`btn ${darkMode ? "btn-dark" : "btn-light"} dark-mode-btn`}
      onClick={toggleDarkMode}
    >
      <span className="me-2">
        {darkMode ? <FaSun /> : <FaMoon />}
      </span>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
