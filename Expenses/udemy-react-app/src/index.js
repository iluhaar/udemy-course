import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const mockDataExpense = [
  {
    date: new Date("2020", "0", "19"),
    expenseType: "Car Insurance",
    amount: 29400,
  },
  {
    date: new Date("2023", "10", "23"),
    expenseType: "Life Insurance",
    amount: 30000,
  },
  {
    date: new Date("2021", "05", "19"),
    expenseType: "Plane Insurance",
    amount: 100295,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App mockDataExpense={mockDataExpense} />
  </React.StrictMode>
);
