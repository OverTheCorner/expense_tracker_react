import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ExpenseForm({ addExpense }) {
  const [category, setCategory] = useState(null);
  const [expenseName, setExpenseName] = useState(null);
  const [expenseAmount, setExpenseAmount] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!expenseName || !expenseAmount) {
      alert("Please fill in both fields.");
      return;
    }

    const newExpense = {
      id: uuid().slice(0, 8),
      name: expenseName,
      amount: parseFloat(expenseAmount),
    };

    addExpense(newExpense);

    setExpenseName("");
    setExpenseAmount("");
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Name: </label>
          <input
            type="text"
            id="expenseName"
            value={expenseName}
            onChange={(event) => setExpenseName(event.target.value)}
            placeholder="Enter expense name"
          />
        </div>
        <div>
          <label>Expense Amount:</label>
          <label className="label-currency">PHP</label>
          <input
            type="number"
            id="expenseAmount"
            value={expenseAmount}
            onChange={(event) => setExpenseAmount(event.target.value)}
            placeholder="Enter expense amount"
          />
        </div>
        <div>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
