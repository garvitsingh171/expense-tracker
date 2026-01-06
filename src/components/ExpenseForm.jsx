import './ExpenseForm.css';
import { useState } from "react";

function ExpenseForm(props) {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('Choose category')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newExpense = {
            id: Date.now(),
            name: name,
            category: category,
            amount: parseInt(amount)
        }

        props.onAddExpense(newExpense)

        setName('')
        setCategory('Choose category')
        setAmount('')
    }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} placeholder="e.g. biscuits" required onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} required onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="medical">Medical</option>
            <option value="transport">Transport</option>
            <option value="stationary">Stationary</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount: </label>
        <input type="number" id="amount" value={amount} placeholder="e.g. 53.14" required onChange={(e) => setAmount(e.target.value)}/>
      </div>

      <button type="submit" className="add-button">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
