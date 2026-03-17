import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="certified-badge">
            <CheckCircle size={16} className="badge-icon" />
            <span>CERTIFIED & TESTED</span>
          </div>
          
          <h1 className="hero-title">
            Premium Tech.<br />
            <span className="highlight">For Less.</span>
          </h1>
          
          <p className="hero-subtitle">
            Top quality iPhones, Laptops & Accessories — up to 60% off retail.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <ShieldCheck size={20} />
              <span>90-Day Warranty</span>
            </div>
            <div className="feature-item">
              <Truck size={20} />
              <span>Fast Delivery</span>
            </div>
            <div className="feature-item">
              <CreditCard size={20} />
              <span>Pay Securely</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/deals" className="btn btn-secondary">View Deals</Link>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
             <img src="/hero-image.png" alt="Premium Tech Devices" className="hero-product-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
