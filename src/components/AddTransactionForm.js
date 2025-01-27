import { useState } from "react";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const AddTransactionForm = () => {
  const { isDarkMode } = useDarkMode(); // Get darkMode state
  const { setTransactions, transactions } = useFinance();
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([
      ...transactions,
      { type, amount: parseFloat(amount), category },
    ]);
    setType("Income");
    setAmount("");
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      } p-4 rounded shadow form-and-list w-100`}
    >
      <div className="mb-3">
        <label className="form-label">Type</label>
        <select
          className={`form-select ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            backgroundColor: isDarkMode ? "#1f1f1f" : "#fff", 
          }}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className={`form-control ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className={`form-control ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`btn ${isDarkMode ? "btn-light" : "btn-dark"} w-auto mt-3`}
      >
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransactionForm;
