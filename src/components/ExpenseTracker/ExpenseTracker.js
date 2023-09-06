import React from "react";

function ExpenseTracker({ expenses, deleteExpense }) {
  const handleClickDelete = (id) => {
    deleteExpense(id);
  };
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.name}:</strong> PHP {expense.amount.toFixed(2)}
            <button>edit</button>
            <button onClick={() => handleClickDelete(expense.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
