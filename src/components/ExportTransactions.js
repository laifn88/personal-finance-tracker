import { useFinance } from "../context/FinanceContext";

const ExportTransactions = () => {
  const { transactions } = useFinance();

  const exportToCSV = () => {
    const rows = [
      ["Type", "Amount", "Category"],
      ...transactions.map((t) => [t.type, t.amount, t.category]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((row) => row.join(",")).join("\n");

    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <button className="btn btn-secondary" onClick={exportToCSV}>
      Export Transactions
    </button>
  );
};

export default ExportTransactions;
