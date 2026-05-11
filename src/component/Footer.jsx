import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Copyright + Blocked banner */}
        <div className="footer-col">
          <div className="copyright">
            <p>© 2026 JM Store</p>
            <div className="mini-logo">
              <span>🎮</span> JM Store
            </div>
          </div>
          <div className="blocked-banner">
            <span>⚠️</span> Blocked by your bank? Contact support
          </div>
        </div>

        {/* Column 2: Address & Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 123 Game Street, Kathmandu, Nepal</p>
          <p>📞 +977 9800000000</p>
          <p>✉️ support@jmstore.com</p>
        </div>

        {/* Column 3: About us, social icons, badges */}
        <div className="footer-col">
          <h4>About us</h4>
          <p>Your one-stop shop for digital and physical games. Best prices, fast delivery.</p>
          <div className="social-icons">
            <span>📘</span> <span>🐦</span> <span>📸</span> <span>🎵</span>
          </div>
          <div className="badges">
            <span className="badge">Trustpilot ⭐ 4.7</span>
            <span className="badge">NVIDIA GEFORCE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer