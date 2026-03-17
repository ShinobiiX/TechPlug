import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Redirect to login before checkout
      navigate('/login?redirect=/checkout');
      return;
    }
    
    // Construct WhatsApp message
    const phoneNumber = "2348139047612"; // Remove '+' for wa.me link
    let message = "Hello TechPlug! I would like to place an order for the following items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Specs: ${item.specs}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₦${(item.price * item.quantity).toLocaleString()}\n`;
      message += `   Image Link: ${item.image}\n\n`;
    });
    
    message += `*Total Order Value: ₦${getCartTotal().toLocaleString()}*`;
    
    // Encode message for URI
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Clear cart since order is being placed via WhatsApp
    clearCart();
    
    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Navigate home in the current tab
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-page">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary mt-4">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image-wrap">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-specs">{item.specs}</p>
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={16} /> Remove
                </button>
              </div>
              
              <div className="item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></button>
                </div>
                <p className="item-total">₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{getCartTotal().toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>₦{getCartTotal().toLocaleString()}</span>
          </div>
          
          <button className="btn btn-primary w-100 checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          
          <div className="secure-checkout-msg">
            <ShieldCheck size={16} /> Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock import for ShieldCheck to fix undefined error
import { ShieldCheck } from 'lucide-react';
export default Cart;
