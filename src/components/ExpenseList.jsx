import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <div className="expense-list">
      <h2>Recent Expenses</h2>
      {props.expenses.length === 0 ? (
        <div className="no-expenses">
          <div className="empty-icon">📝</div>
          <p>No expenses yet</p>
          <span className="empty-hint">
            Add your first expense to get started!
          </span>
        </div>
      ) : (
        <div className="expense-container">
          {props.expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              category={expense.category}
              amount={expense.amount}
              onDelete={props.onDeleteExpense}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
