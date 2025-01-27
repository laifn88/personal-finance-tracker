import React, { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext";

const CategoryBudget = () => {
  const { isDarkMode } = useDarkMode();
  const { categoryBudgets, setCategoryBudgets, transactions } = useFinance();
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");

  const handleAddBudget = () => {
    setCategoryBudgets({ ...categoryBudgets, [category]: parseFloat(budget) });
    setCategory("");
    setBudget("");
  };

  const categorySpending = Object.keys(categoryBudgets).map((cat) => {
    const spent = transactions
      .filter((t) => t.category === cat)
      .reduce((acc, t) => acc + t.amount, 0);

    return { category: cat, budget: categoryBudgets[cat], spent };
  });

  return (
    <div className={`card shadow-sm p-4 ${isDarkMode ? "bg-dark text-light" : "bg-white text-dark"}`}>
      <h4 className="mb-3">Category Budgets</h4>
      <div className="d-flex flex-column mb-3">
        <input
          type="text"
          className={`form-control mb-2 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} placeholder-${isDarkMode ? "dark" : "light"}`}
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          className={`form-control mb-2 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"} placeholder-${isDarkMode ? "dark" : "light"}`}
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <button
          className={`btn ${isDarkMode ? "btn-light" : "btn-primary"}`}
          onClick={handleAddBudget}
          style={{
            marginTop: "10px",  
            alignSelf: "flex-start",  
            paddingLeft: "20px",  
            paddingRight: "20px", 
          }}
        >
          Add Budget
        </button>
      </div>

      <ul className="list-group mt-3">
        {categorySpending.map((cat) => (
          <li
            key={cat.category}
            className={`list-group-item d-flex justify-content-between ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            <strong>{cat.category}:</strong> Spent ${cat.spent} / Budget ${cat.budget}
            {cat.spent > cat.budget && (
              <span className="badge bg-danger text-white">Over Budget</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBudget;
