import { useState, useEffect } from "react";
import NewExpense from "./components/Expense/NewExpense/NewExpense";
import "./App.css";
import FiltersComponentWrapper from "./components/Filters/FiltersComponentWrapper";
import ExpensesWrapper from "./components/Expense/ExpensesWrapper";

function App({ mockDataExpense }) {
  const [expenses, setExpenses] = useState();
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setExpenses(mockDataExpense);
  }, [mockDataExpense]);

  const addNewExpense = (expenseType, ammount, date) => {
    setExpenses((prev) => [...prev, { expenseType, ammount, date }]);
  };

  const handleSearch = (string) => {
    if (string !== "") {
      const filteredExpenses = mockDataExpense.filter((expense) =>
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

  const dates = expenses?.map((i) => i?.date);

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
          <button className="add_expense-button" onClick={() => setShowForm(!showForm)}>
            {!showForm ? "Add new Expense" : "Close"}
          </button>
        </div>
        {showForm && <NewExpense addNewExpense={addNewExpense} />}
      </div>
    </div>
  );
}

export default App;
