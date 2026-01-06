import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <div className="expense-name">{props.name}</div>
        <div className="expense-category">{props.category}</div>
      </div>
      <div className="expense-amount">₹{props.amount}</div>
      <button className='delete-button' onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;
