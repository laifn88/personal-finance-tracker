import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext";

const MonthlyReports = () => {
  const { isDarkMode } = useDarkMode(); // Get darkMode state
  const { transactions } = useFinance();

  const monthlySummary = transactions.reduce((acc, t) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const key = `${month}-${year}`;
    if (!acc[key]) acc[key] = { income: 0, expenses: 0 };
    if (t.type === "Income") acc[key].income += t.amount;
    if (t.type === "Expense") acc[key].expenses += t.amount;
    return acc;
  }, {});

  return (
    <div
    className={`card p-4 ${isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    style={{
      backgroundColor: isDarkMode ? "#1f1f1f" : "#fff", // Ensure the same background color
    }}
    >
      <h3>Monthly Reports</h3>
      <ul className="list-group">
        {Object.keys(monthlySummary).map((key) => (
          <li
            key={key}
            className={`list-group-item ${
              isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            <strong>{key}:</strong> Income: ${monthlySummary[key].income}, Expenses: ${monthlySummary[key].expenses}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonthlyReports;
