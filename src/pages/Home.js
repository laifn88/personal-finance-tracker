import BudgetOverview from "../components/BudgetOverview";
import Charts from "../components/Charts";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : ""; 
    localStorage.setItem("darkMode", darkMode); // Save the mode in local storage
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}> 
      <BudgetOverview />
      <Charts />
    </div>
  );
};

export default App;

