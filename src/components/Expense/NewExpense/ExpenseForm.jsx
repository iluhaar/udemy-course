import React, { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = ({ addNewExpense, showButton }) => {
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewExpense(expenseType, +amount, new Date(date));

    setExpenseType("");
    setDate("");
    setAmount(0);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)} className="new-expense__form">
      <div className="new-expense-type-amount">
        <div className="expense-item-card">
          <label>Expense Type:</label>
          <input
            type="text"
            id="expenseType"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
            placeholder="Expense type.."
            required
          />
        </div>
        <div className="expense-item-card">
          <label>amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Expense type.."
            required
          />
        </div>
      </div>
      <div className="expense-item-card">
        <label>Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Expense type.."
          required
        />
      </div>
      <>
        <button className="expense-item-add" type="submit">
          Add new expense
        </button>
        <button onClick={() => showButton(false)}>Close</button>
      </>
    </form>
  );
};

export default ExpenseForm;
