import AddTransactionForm from "../components/AddTransactionForm";
import TransactionList from "../components/TransactionList";
import ExportTransactions from "../components/ExportTransactions";

const Transactions = () => (
  <div>
    <h1>Transactions</h1>
    <div className="d-flex justify-content-between align-items-center mb-4">
      <p>Manage your income and expenses below:</p>
      <ExportTransactions />
    </div>
    <AddTransactionForm />
    <TransactionList />
  </div>
);

export default Transactions;
