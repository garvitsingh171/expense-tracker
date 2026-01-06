import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>
      {props.expenses.length === 0 ? (
        <p className="no-expense">No expenses yet. Add one to see here.</p>
      ) : (
        <div className="expense-container">
          {props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              name={expense.name}
              category={expense.category}
              amount={expense.amount}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
