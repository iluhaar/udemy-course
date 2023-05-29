import React from "react";

const ExpenseDescription = ({ expenseType, amount }) => {
  return (
    <div className="expense-item__description">
      <h2>{expenseType}</h2>
      <div className="expense-item__price">${Number(parseFloat(amount).toFixed(2))}</div>
    </div>
  );
};

export default ExpenseDescription;
