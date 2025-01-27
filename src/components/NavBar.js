import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-between">
      <div>
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/monthly-reports">Reports</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
          className={`dark-mode-btn ${isDarkMode ? "dark-mode" : ""}`}
        >
          {isDarkMode ? (
            <>
              <FaSun /> Light Mode
            </>
          ) : (
            <>
              <FaMoon /> Dark Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
