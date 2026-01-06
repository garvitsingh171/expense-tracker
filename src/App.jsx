import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([])

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense}/>
      <ExpenseList expenses={expenses} />
      <ExpenseTotal expenses={expenses}/>
    </>
  );
}

export default App;
