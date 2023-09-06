import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTracker from "./ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    console.log([...expenses, newExpense]);
  };

  return (
    <div className='App'>
      <h1>Expense Tracker</h1>
      <ExpenseTracker expenses={expenses} />
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;
