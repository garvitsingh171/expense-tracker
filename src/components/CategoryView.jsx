import "./CategoryView.css";

function CategoryView({ expenses }) {
  const categoryTotals = {};

  expenses.forEach((exp) => {
    const cat = exp.category || "Uncategorized";
    if (!categoryTotals[cat]) {
      categoryTotals[cat] = 0;
    }
    categoryTotals[cat] += exp.amount;
  });

  const entries = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);

  const totalAmount = entries.reduce((sum, [, amount]) => sum + amount, 0);

  const getCategoryEmoji = (category) => {
    const emojiMap = {
      Food: "🍔",
      Medical: "🏥",
      Transport: "🚗",
      Stationary: "📝",
      Entertainment: "🎬",
      Utilities: "💡",
      Other: "📦",
      Uncategorized: "❓",
    };
    return emojiMap[category] || "📦";
  };

  const getPercentage = (amount) => {
    if (totalAmount === 0) return 0;
    return ((amount / totalAmount) * 100).toFixed(1);
  };

  return (
    <div className="category-view">
      <div className="category-header">
        <h2>Category Breakdown</h2>
        <p className="category-subtitle">Analyze your spending patterns</p>
      </div>

      {entries.length === 0 ? (
        <div className="category-empty">
          <div className="empty-icon">📊</div>
          <p>No expenses to categorize</p>
          <span className="empty-hint">
            Add expenses to see your spending breakdown
          </span>
        </div>
      ) : (
        <>
          <div className="category-total-card">
            <span className="total-label">Total Spending</span>
            <span className="total-value">₹{totalAmount.toFixed(2)}</span>
          </div>

          <div className="category-grid">
            {entries.map(([category, total]) => (
              <div key={category} className="category-card">
                <div className="category-card-header">
                  <span className="category-emoji">
                    {getCategoryEmoji(category)}
                  </span>
                  <span className="category-name">{category}</span>
                </div>
                <div className="category-card-body">
                  <div className="category-amount">₹{total.toFixed(2)}</div>
                  <div className="category-percentage">
                    {getPercentage(total)}%
                  </div>
                </div>
                <div className="category-progress-bar">
                  <div
                    className="category-progress-fill"
                    style={{ width: `${getPercentage(total)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryView;
