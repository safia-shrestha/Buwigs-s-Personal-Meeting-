import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <span>🎮</span>
          </div>
          <span className="logo-text">JM Store</span>
        </div>

        {/* Search Bar */}
        <div className="search-wrapper">
          <input type="text" placeholder="Search games..." className="search-input" />
          <button className="search-btn">🔍</button>
        </div>

        {/* Right Side: Cart + Sign In */}
        <div className="nav-actions">
          <button className="cart-btn">
            🛒 <span className="cart-count">0</span>
          </button>
          <button className="signin-btn">Sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar