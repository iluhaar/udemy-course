import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, expenseType, amount }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  return (
    <div className="expense-item">
      <ExpenseDate month={month} day={day} year={year} />
      <ExpenseDescription amount={amount} expenseType={expenseType} />
    </div>
  );
};

export default ExpenseItem;
