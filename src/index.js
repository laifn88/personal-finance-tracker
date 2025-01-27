import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { FinanceProvider } from "./context/FinanceContext";
import "./App.css";



ReactDOM.render(
  <React.StrictMode>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
