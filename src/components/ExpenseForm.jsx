import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter an expense name");
      return;
    }

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: name,
      category: category,
      amount: parseFloat(amount),
    };

    props.onAddExpense(newExpense);

    setName("");
    setCategory("Food");
    setAmount("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Add New Expense</h2>
        <p className="form-subtitle">Track your spending easily</p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Expense Name</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="e.g., Coffee, Groceries, Movie tickets"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Medical">Medical</option>
          <option value="Transport">Transport</option>
          <option value="Stationary">Stationary</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount (₹)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          placeholder="e.g., 250.00"
          step="0.01"
          min="0"
          required
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button type="submit" className="add-button">
        <span className="button-icon">+</span>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
