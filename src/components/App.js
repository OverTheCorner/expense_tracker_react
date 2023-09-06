import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import TotalExpenses from "./TotalExpenses/TotalExpenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    console.log([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <TotalExpenses expenses={expenses} />
      <ExpenseTracker expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;
