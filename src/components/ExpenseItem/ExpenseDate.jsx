import React from "react";

const ExpenseDate = ({ month, day, year }) => {
  return (
    <div className="expense-item__date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
