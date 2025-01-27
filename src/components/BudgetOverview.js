import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook

const BudgetOverview = () => {
  const { totalIncome, totalExpenses, remainingBudget, monthlyBudget, setMonthlyBudget } = useFinance();
  const { isDarkMode } = useDarkMode(); // Get darkMode state

  // Calculate remaining budget if not already done in context
  const remaining = totalIncome - totalExpenses;

  // Set the appropriate message based on the remaining budget
  const budgetMessage = remaining < 0
    ? "You have exceeded your budget."
    : "You are within budget!";

  return (
    <div className={`card p-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h3 className="mb-4">Budget Overview</h3>
      <div className="mb-3">
        <p><strong>Monthly Budget:</strong> ${monthlyBudget}</p>
        <input
          type="number"
          className="form-control my-2"
          value={monthlyBudget}
          onChange={(e) => setMonthlyBudget(parseFloat(e.target.value) || 0)}
          placeholder="Set your budget"
        />
      </div>
      <div className="mb-3">
        <p><strong>Total Income:</strong> ${totalIncome}</p>
        <p><strong>Total Expenses:</strong> ${totalExpenses}</p>
        <p><strong>Remaining Budget:</strong> ${remaining}</p>
      </div>
      <p className={remaining < 0 ? "text-danger" : "text-success"}>
        {budgetMessage}
      </p>
    </div>
  );
};

export default BudgetOverview;
