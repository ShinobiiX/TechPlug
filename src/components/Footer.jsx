import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">&#10065;</span> 
            TechPlug
          </Link>
          <p className="footer-desc">
            Your trusted source for premium tech devices at affordable prices.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/phones">iPhones</Link></li>
            <li><Link to="/laptops">Laptops</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/deals">Hot Deals</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/warranty">Warranty Info</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-social">
           <h4>Connect With Us</h4>
           <p>Follow us for the latest deals and updates.</p>
           {/* Placeholder for social icons */}
           <div className="social-icons">
              <span className="social-placeholder">IG</span>
              <span className="social-placeholder">TW</span>
              <span className="social-placeholder">FB</span>
           </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechPlug. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
