import './ExpenseTotal.css'

function ExpenseTotal(props) {
  const total = props.expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <div className='expense-total'>
      <h3>Total Spent</h3>
      <p className='total-amount'>₹{total}</p>
    </div>
  );
}

export default ExpenseTotal;
