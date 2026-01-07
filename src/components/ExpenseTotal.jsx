import "./ExpenseTotal.css";

function ExpenseTotal(props) {
  const total = props.expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div className="expense-total">
      <div className="total-icon">₹</div>
      <h3>Total Expenses</h3>
      <p className="total-amount">₹{total.toFixed(2)}</p>
      <p className="expense-count">
        {props.expenses.length} transaction
        {props.expenses.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default ExpenseTotal;
