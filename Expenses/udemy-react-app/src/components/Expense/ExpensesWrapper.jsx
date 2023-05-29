import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

const ExpensesWrapper = ({ expenses }) => {
  return (
    <div>
      {expenses &&
        expenses?.map((data, index) => {
          return <ExpenseItem key={index} {...data} />;
        })}

      <ExpensesChart expenses={expenses} />
    </div>
  );
};

export default ExpensesWrapper;
