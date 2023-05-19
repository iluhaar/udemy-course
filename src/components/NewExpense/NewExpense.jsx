import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addNewExpense }) => {
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <ExpenseForm addNewExpense={addNewExpense} />
    </div>
  );
};

export default NewExpense;
