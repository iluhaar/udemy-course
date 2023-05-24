import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesWrapper = ({ expenses }) => {
  return (
    <div>
      {expenses &&
        expenses?.map((data, index) => {
          return <ExpenseItem key={index} {...data} />;
        })}
    </div>
  );
};

export default ExpensesWrapper;
