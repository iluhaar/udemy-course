import { useState, useEffect } from "react";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App({ mockDataExpense }) {
  const [expenses, setExpenses] = useState();
  // const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setExpenses(mockDataExpense);
  }, [mockDataExpense]);

  const addNewExpense = (expenseType, ammount, date) => {
    setExpenses((prev) => [...prev, { expenseType, ammount, date }]);
  };

  const handleSearch = (string) => {
    console.info("🚀 ~ file: App.js:19 ~ handleSearch ~ string:", string);
    if (string !== "") {
      const filteredExpenses = expenses.filter((expense) =>
        expense.expenseType.toLowerCase().includes(string.toLowerCase())
      );
      console.info("🚀 ~ file: App.js:22 ~ handleSearch ~ filteredExpenses:", filteredExpenses);

      setExpenses(filteredExpenses);
    } else {
      setExpenses(mockDataExpense);
    }
  };

  return (
    <div className="App">
      {/* <button onClick={() => setShowForm(!showForm)}>{!showForm ? "Add new Expense" : "Close"}</button> */}

      <div className="expense_items__wrapper">
        <NewExpense addNewExpense={addNewExpense} />
        <SearchBar handleSearch={handleSearch} />
        {expenses &&
          expenses.map((data, index) => {
            return <ExpenseItem key={index} {...data} />;
          })}
      </div>
    </div>
  );
}

export default App;
