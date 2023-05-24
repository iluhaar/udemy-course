import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense }) => {
  return (
    <div className="new-expense__wrapper">
      <ExpenseForm addNewExpense={addNewExpense} />
    </div>
  );
};

export default NewExpense;
