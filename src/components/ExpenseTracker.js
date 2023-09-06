import React from "react";

function ExpenseTracker({ expenses }) {
  const handleClickDelete = (event) => {
    console.log(event.key);
  };
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.name}:</strong> PHP {expense.amount.toFixed(2)}
            <button>edit</button>
            <button onClick={handleClickDelete}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;
