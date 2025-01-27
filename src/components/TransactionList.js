import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const TransactionList = () => {
  const { isDarkMode } = useDarkMode(); // Get darkMode state
  const { transactions, setTransactions } = useFinance(); // Added setTransactions
  const [filter, setFilter] = useState("All");

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.type === filter);

  // Function to delete a transaction
  const handleDelete = (transactionIndex) => {
    setTransactions(transactions.filter((_, index) => index !== transactionIndex));
  };

  return (
    <div className={isDarkMode ? "bg-dark text-light p-3" : "bg-light text-dark p-3"}>
      <div className="d-flex justify-content-between mb-3">
        <h3>Transaction History</h3>
        <select
          className={`form-select w-auto ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
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
              className={`list-group-item d-flex justify-content-between align-items-center ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              <span>
                <strong>{t.type}:</strong> ${t.amount} - {t.category}
              </span>
              <div className="d-flex align-items-center">
                <span
                  className={`badge me-2 ${t.type === "Income" ? "bg-success" : "bg-danger"}`}
                  style={{ minWidth: '80px' }} // Ensure consistent width for both tags
                >
                  {t.type}
                </span>
                <button
                  className={`btn btn-sm ${isDarkMode ? "btn-light" : "btn-dark"} ms-2`}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
