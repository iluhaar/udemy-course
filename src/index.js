import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const mockDataExpense = [
  {
    date: new Date("2023", "05", "19"),
    expenseType: "Car Insurance",
    ammount: 294.67,
  },
  {
    date: new Date("2023", "05", "19"),
    expenseType: "Life Insurance",
    ammount: 30000.67,
  },
  {
    date: new Date("2023", "05", "19"),
    expenseType: "Plane Insurance",
    ammount: 100294.67,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App mockDataExpense={mockDataExpense} />
  </React.StrictMode>
);
