import "./App.css";
import ExpenseList from "./components/ExpenseList";

function App() {
  const sampleExpense = [
    { id: 1, name: "biscuits", category: "groceries", amount: 56.78 },
    { id: 2, name: "notebook", category: "stationary", amount: 23.65 },
    { id: 3, name: "paracetamol", category: "medical", amount: 10.14 },
  ];

  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={sampleExpense} />
    </>
  );
}

export default App;
