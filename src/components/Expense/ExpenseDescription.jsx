import React from "react";

const ExpenseDescription = ({ expenseType, ammount }) => {
  return (
    <div className="expense-item__description">
      <h2>{expenseType}</h2>
      <div className="expense-item__price">${ammount}</div>
    </div>
  );
};

export default ExpenseDescription;
