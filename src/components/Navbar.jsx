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
          className={
            currentPage === "home"
              ? "nav-button nav-button-active"
              : "nav-button"
          }
          onClick={() => onChangePage("home")}
        >
          Home
        </button>
        <button
          className={
            currentPage === "add"
              ? "nav-button nav-button-active"
              : "nav-button"
          }
          onClick={() => onChangePage("add")}
        >
          Add Expense
        </button>
        <button
          className={
            currentPage === "category"
              ? "nav-button nav-button-active"
              : "nav-button"
          }
          onClick={() => onChangePage("category")}
        >
          Category View
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
