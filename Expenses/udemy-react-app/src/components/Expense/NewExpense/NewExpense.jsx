import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addNewExpense, showButton }) => {
  return (
    <div className="new-expense__wrapper">
      <ExpenseForm addNewExpense={addNewExpense} showButton={showButton} />
    </div>
  );
};

export default NewExpense;
