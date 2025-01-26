import BudgetOverview from "../components/BudgetOverview";
import Charts from "../components/Charts";
import CategoryBudget from "../components/CategoryBudget";
import MonthlyReports from "../components/MonthlyReports";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : ""; // Toggle the dark mode on body
    localStorage.setItem("darkMode", darkMode); // Save the mode in local storage
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}> 
      <BudgetOverview />
      <Charts />
      <CategoryBudget />
      <MonthlyReports />
    </div>
  );
};

export default App;

