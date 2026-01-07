import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <div className="expense-name">{props.name}</div>
        <div className="expense-category">{props.category}</div>
      </div>
      <div className="expense-right">
        <div className="expense-amount">₹{props.amount.toFixed(2)}</div>
        <button
          className="delete-button"
          onClick={() => props.onDelete(props.id)}
          aria-label="Delete expense"
        >
          <span className="delete-icon">🗑️</span>
          <span className="delete-text">Delete</span>
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
