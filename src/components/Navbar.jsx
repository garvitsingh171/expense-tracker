import "./Navbar.css";

function Navbar({ currentPage, onChangePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">₹</span>
        <span className="navbar-brand">Expense Tracker</span>
      </div>
      <div className="navbar-right">
        <button
          className={`nav-button ${
            currentPage === "home" ? "nav-button-active" : ""
          }`}
          onClick={() => onChangePage("home")}
        >
          Home
        </button>
        <button
          className={`nav-button ${
            currentPage === "add" ? "nav-button-active" : ""
          }`}
          onClick={() => onChangePage("add")}
        >
          Add Expense
        </button>
        <button
          className={`nav-button ${
            currentPage === "category" ? "nav-button-active" : ""
          }`}
          onClick={() => onChangePage("category")}
        >
          Categories
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
