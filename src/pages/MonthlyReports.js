import React from "react";
import CategoryBudget from "../components/CategoryBudget"; 
import MonthlyReport from "../components/MonthlyReports"; 

const MonthlyReportsPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Monthly Reports</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <CategoryBudget />
        </div>
        <div className="col-lg-6 mb-4">
          <MonthlyReport />
        </div>
      </div>
    </div>
  );
};

export default MonthlyReportsPage;
