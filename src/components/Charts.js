import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis } from "recharts";
import { useFinance } from "../context/FinanceContext";
import { useDarkMode } from "../context/DarkModeContext"; // Import the hook
import "../Charts.css";

const Charts = () => {
  const { isDarkMode } = useDarkMode(); // Get darkMode state
  const { transactions, totalIncome, totalExpenses } = useFinance();

  const pieData = transactions.reduce((acc, t) => {
    const existing = acc.find((item) => item.name === t.category);
    if (existing) {
      existing.value += t.amount;
    } else {
      acc.push({ name: t.category, value: t.amount });
    }
    return acc;
  }, []);

  const PIE_COLORS = ["#FFB3C1", "#FFC3D1", "#FFD5E5", "#FFE5F0"]; 
  const BAR_COLOR = "#FFB3C1"; 
  return (
    <div className={isDarkMode ? "bg-dark text-light p-4 rounded" : "bg-light text-dark p-4 rounded"}>
      <h3 className="mb-4">Spending Patterns</h3>
      <div className="d-flex justify-content-between">
        <div className="chart-container">
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: $${value}`}
              labelLine={false}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="chart-container">
          <BarChart width={400} height={300} data={[{ name: "Income", value: totalIncome }, { name: "Expenses", value: totalExpenses }]}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={BAR_COLOR} />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Charts;
