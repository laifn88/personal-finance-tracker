import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const BudgetOverview = () => {
  const { totalIncome, totalExpenses, remainingBudget, monthlyBudget, setMonthlyBudget } = useFinance();
  const { darkMode } = useDarkMode(); // Get darkMode state

  return (
    <div className={`card p-3 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h3>Budget Overview</h3>
      <p><strong>Monthly Budget:</strong> ${monthlyBudget}</p>
      <input
        type="number"
        className="form-control my-2"
        value={monthlyBudget}
        onChange={(e) => setMonthlyBudget(parseFloat(e.target.value) || 0)}
      />
      <p><strong>Total Income:</strong> ${totalIncome}</p>
      <p><strong>Total Expenses:</strong> ${totalExpenses}</p>
      <p><strong>Remaining Budget:</strong> ${remainingBudget}</p>
      <p>
        {remainingBudget < monthlyBudget
          ? <span className="text-danger">You are within budget!</span>
          : <span className="text-success">You have exceeded your budget.</span>}
      </p>
    </div>
  );
};

export default BudgetOverview;
