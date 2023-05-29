import { useState } from "react";
import NewExpense from "./components/Expense/NewExpense/NewExpense";
import "./App.css";
import FiltersComponentWrapper from "./components/Filters/FiltersComponentWrapper";
import ExpensesWrapper from "./components/Expense/ExpensesWrapper";

function App({ mockDataExpense }) {
  const [expenses, setExpenses] = useState(mockDataExpense);
  const [showForm, setShowForm] = useState(false);

  const addNewExpense = (expenseType, amount, date) => {
    setExpenses((prev) => [...prev, { expenseType, amount, date }]);
  };

  const handleSearch = (string) => {
    if (string !== "") {
      const filteredExpenses = expenses.filter((expense) =>
        expense.expenseType.toLowerCase().includes(string.toLowerCase())
      );

      setExpenses(filteredExpenses);
    } else {
      setExpenses(mockDataExpense);
    }
  };

  const handleYearFilter = (year) => {
    const filteredExpenses = mockDataExpense?.filter((expense) => {
      return expense.date?.toLocaleString("en-US", { year: "numeric" }) === year;
    });

    setExpenses(filteredExpenses);
  };

  const handlerClearFilters = () => {
    setExpenses(mockDataExpense);
  };

  const dates = mockDataExpense?.map((i) => i?.date);

  return (
    <div className="App">
      <div className="expense_items__wrapper">
        <FiltersComponentWrapper
          handleSearch={handleSearch}
          dates={dates}
          handleYearFilter={handleYearFilter}
          handlerClearFilters={handlerClearFilters}
        />
        <ExpensesWrapper expenses={expenses} />
        <div className="add_expense-button__wrapper">
          {!showForm && (
            <button className="add_expense-button" onClick={() => setShowForm(true)}>
              Add new Expense
            </button>
          )}
        </div>
        {showForm && <NewExpense addNewExpense={addNewExpense} showButton={setShowForm} />}
      </div>
    </div>
  );
}

export default App;
