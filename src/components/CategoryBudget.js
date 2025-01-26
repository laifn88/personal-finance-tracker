import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const CategoryBudget = () => {
  const { darkMode } = useDarkMode(); // Get darkMode state
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
    <div className={`card p-3 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h3>Category Budgets</h3>
      <div className="d-flex mb-3">
        <input
          type="text"
          className={`form-control me-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            "::placeholder": {
              color: darkMode ? "#bbb" : "#666", // Placeholder color for dark and light modes
            },
          }}
        />
        <input
          type="number"
          className={`form-control me-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={{
            "::placeholder": {
              color: darkMode ? "#bbb" : "#666", // Placeholder color for dark and light modes
            },
          }}
        />
        <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={handleAddBudget}>
          Add Budget
        </button>
      </div>
      <ul className="list-group">
        {categorySpending.map((cat) => (
          <li key={cat.category} className={`list-group-item ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <strong>{cat.category}:</strong> Spent ${cat.spent} / Budget ${cat.budget}
            {cat.spent > cat.budget && <span className="text-danger ms-2">(Over Budget)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBudget;
