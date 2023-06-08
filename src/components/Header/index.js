// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  //   <div className="app-container">
  <nav className="nav-container">
    <div className="img-card">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="text">Wave</p>
    </div>
    <ul className="un-order-list">
      <li>
        <Link className="link-card" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link-card" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link-card" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
  //   </div>
)

export default Header
