import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const TransactionList = () => {
  const { darkMode } = useDarkMode(); // Get darkMode state
  const { transactions } = useFinance();
  const [filter, setFilter] = useState("All");

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  return (
    <div className={darkMode ? "bg-dark text-light p-3" : "bg-light text-dark p-3"}>
      <div className="d-flex justify-content-between mb-3">
        <h3>Transaction History</h3>
        <select
          className={`form-select w-auto ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <ul className="list-group">
        {filteredTransactions.length === 0 ? (
          <p className="text-muted">No transactions to display</p>
        ) : (
          filteredTransactions.map((t, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              <span>
                <strong>{t.type}:</strong> ${t.amount} - {t.category}
              </span>
              <span
                className={`badge ${
                  t.type === "Income" ? "bg-success" : "bg-danger"
                }`}
              >
                {t.type}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
