import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const About = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`container py-5 ${isDarkMode ? "text-light" : "text-dark"}`}
      style={{
        backgroundColor: isDarkMode ? "#1f1f1f" : "#fff", 
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">About Personal Finance Tracker</h1>
          <p>
            The Personal Finance Tracker is a simple application designed to help you monitor your
            income and expenses. With features like transaction tracking, budgeting overview, and
            data visualization, this app ensures you stay on top of your finances.
          </p>
          <h3
            className="mt-4"
            style={{
              color: isDarkMode ? "#f1f1f1" : "#333", 
            }}
          >
            Features:
          </h3>
          <ul
            className={`list-group ${isDarkMode ? "" : "bg-light"}`}
            style={{
              backgroundColor: isDarkMode ? "#1f1f1f" : "#fff", 
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <li
              className={`list-group-item ${isDarkMode ? "bg-transparent text-light" : "bg-light text-dark"}`}
            >
              <strong>Track income and expenses</strong>
            </li>
            <li
              className={`list-group-item ${isDarkMode ? "bg-transparent text-light" : "bg-light text-dark"}`}
            >
              <strong>View detailed transaction history</strong>
            </li>
            <li
              className={`list-group-item ${isDarkMode ? "bg-transparent text-light" : "bg-light text-dark"}`}
            >
              <strong>Visualize spending patterns with charts</strong>
            </li>
            <li
              className={`list-group-item ${isDarkMode ? "bg-transparent text-light" : "bg-light text-dark"}`}
            >
              <strong>Manage your budget effectively</strong>
            </li>
          </ul>
          <p className="mt-4">
            Built using modern web technologies like React, React Router, and Recharts, this
            application is fully responsive and easy to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
