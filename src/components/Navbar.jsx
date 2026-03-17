import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">&#10065;</span> {/* Temp icon */}
          TechPlug
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/phones">Phones</Link></li>
          <li><Link to="/laptops">Laptops</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button className="icon-btn cart-btn" aria-label="Cart">
            <Link to="/cart">
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </Link>
          </button>

          <a 
            href="https://wa.me/2348139047612?text=Hello%20TechPlug!%20I'm%20interested%20in%20buying%20some%20premium%20tech." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-btn"
          >
            <span className="whatsapp-icon">&#9825;</span> {/* Temp icon */}
            Order on WhatsApp
          </a>

          <button className="mobile-menu-btn" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
