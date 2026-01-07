// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseTotal from './components/ExpenseTotal'
import CategoryView from './components/CategoryView'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [currentPage, setCurrentPage] = useState('home')

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id))
  }

  const renderPage = () => {
    if (currentPage === 'home') {
      return (
        <>
          <section className="section">
            <ExpenseTotal expenses={expenses} />
          </section>
          <section className="section">
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </section>
        </>
      )
    }

    if (currentPage === 'add') {
      return (
        <section className="section">
          <ExpenseForm onAddExpense={addExpense} />
        </section>
      )
    }

    if (currentPage === 'category') {
      return (
        <section className="section">
          <CategoryView expenses={expenses} />
        </section>
      )
    }

    return <p className="section">Unknown page</p>
  }

  return (
    <div className="app-root">
      <Navbar currentPage={currentPage} onChangePage={setCurrentPage} />
      <main className="main-content">
        <h1 className="app-title">Expense Tracker</h1>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
