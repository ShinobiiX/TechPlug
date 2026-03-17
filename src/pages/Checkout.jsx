import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Generate mock order details on mount
    const mockOrderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderDetails({
      orderNumber: mockOrderNum,
      date: new Date().toLocaleDateString(),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()
    });
    
    // Clear cart since order is "placed"
    clearCart();
    
    // Auto redirect after 10 seconds (optional UX)
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!orderDetails) return <div>Processing...</div>;

  return (
    <div className="checkout-success-page">
      <div className="success-container">
        <CheckCircle className="success-icon" size={64} />
        <h1 className="success-title">Order Confirmed!</h1>
        <p className="success-subtitle">
          Thank you for shopping with TechPlug. Your premium tech is on its way.
        </p>
        
        <div className="order-details-card">
          <div className="detail-row">
            <span>Order Number:</span>
            <strong>{orderDetails.orderNumber}</strong>
          </div>
          <div className="detail-row">
            <span>Order Date:</span>
            <strong>{orderDetails.date}</strong>
          </div>
          <div className="detail-row">
            <span>Est. Delivery:</span>
            <strong>{orderDetails.estimatedDelivery}</strong>
          </div>
        </div>
        
        <p className="email-notice">
          We've sent a confirmation email with order details and tracking information.
        </p>
        
        <div className="success-actions">
          <Link to="/" className="btn btn-primary">Return to Home</Link>
          <Link to="/shop" className="btn btn-secondary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
