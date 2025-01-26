import React, { createContext, useContext, useState, useEffect } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    const savedBudget = localStorage.getItem("monthlyBudget");
    return savedBudget ? JSON.parse(savedBudget) : 3000;
  });

  const [categoryBudgets, setCategoryBudgets] = useState(() => {
    const savedCategoryBudgets = localStorage.getItem("categoryBudgets");
    return savedCategoryBudgets ? JSON.parse(savedCategoryBudgets) : {};
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("monthlyBudget", JSON.stringify(monthlyBudget));
  }, [monthlyBudget]);

  useEffect(() => {
    localStorage.setItem("categoryBudgets", JSON.stringify(categoryBudgets));
  }, [categoryBudgets]);

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const remainingBudget = totalIncome - totalExpenses;

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        setTransactions,
        monthlyBudget,
        setMonthlyBudget,
        totalIncome,
        totalExpenses,
        remainingBudget,
        categoryBudgets,
        setCategoryBudgets,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
