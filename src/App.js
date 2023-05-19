import { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

function App({ mockDataExpense }) {
  const [expenses, setExpenses] = useState();
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setExpenses(mockDataExpense);
  }, [mockDataExpense]);

  const addNewExpense = (expenseType, ammount, date) => {
    setExpenses((prev) => [...prev, { expenseType, ammount, date }]);
  };

  return (
    <div className="App">
      <div className="expense_items__wrapper">
        {expenses &&
          expenses.map((data, index) => {
            return <ExpenseItem key={index} {...data} />;
          })}
      </div>
      <button onClick={() => setShowForm(!showForm)}>{!showForm ? "Add new Expense" : "Close"}</button>
      {showForm && <NewExpense addNewExpense={addNewExpense} />}
    </div>
  );
}

export default App;
