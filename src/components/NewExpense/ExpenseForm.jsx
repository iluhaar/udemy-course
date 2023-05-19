import React, { useState } from "react";

const ExpenseForm = ({ addNewExpense }) => {
  const [expenseType, setExpenseType] = useState("");
  const [ammount, setAmmount] = useState(null);
  const [date, setDate] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewExpense(expenseType, ammount, new Date(date));

    setExpenseType("");
    setDate(null);
    setAmmount(null);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <div>
        <label>Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          placeholder="Expense type.."
        />
      </div>
      <div>
        <label>Ammount:</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          id="ammount"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
          placeholder="Expense type.."
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Expense type.."
        />
      </div>

      <>
        <button type="submit">Add</button>
      </>
    </form>
  );
};

export default ExpenseForm;
