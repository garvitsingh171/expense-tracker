import './CategoryView.css'

function CategoryView({ expenses }) {
  const categoryTotals = {}

  expenses.forEach((exp) => {
    const cat = exp.category || 'Uncategorized'
    if (!categoryTotals[cat]) {
      categoryTotals[cat] = 0
    }
    categoryTotals[cat] += exp.amount
  })

  const entries = Object.entries(categoryTotals)

  return (
    <div className="category-view">
      <h2>Category-wise Totals</h2>
      {entries.length === 0 ? (
        <p className="category-empty">
          No expenses yet. Add some expenses to see category totals.
        </p>
      ) : (
        <div className="category-table">
          <div className="category-row category-header">
            <span>Category</span>
            <span>Total (₹)</span>
          </div>
          {entries.map(([category, total]) => (
            <div key={category} className="category-row">
              <span className="category-name">{category}</span>
              <span className="category-amount">₹{total}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryView
