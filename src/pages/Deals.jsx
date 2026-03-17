import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronDown, Tag } from 'lucide-react';
import '../pages/Shop.css'; // Reusing shop grid styles
import './Deals.css';

const Deals = () => {
    // Mock data for discounted items
    const dealsProducts = [
      { id: 13, name: 'iPhone 11 Pro', specs: '64GB • Good Condition', price: 280000, originalPrice: 350000, category: 'phones', image: 'https://images.unsplash.com/photo-1605236453806-6ff368528892?q=80&w=300&auto=format&fit=crop' },
      { id: 14, name: 'AirPods 3rd Gen', specs: 'Spatial Audio • Lightning', price: 85000, originalPrice: 110000, category: 'accessories', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop' },
      { id: 15, name: 'MacBook Air 2020 (Intel)', specs: '8GB • 256GB SSD', price: 550000, originalPrice: 700000, category: 'laptops', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop' },
      { id: 16, name: 'Apple Watch SE (1st Gen)', specs: '40mm • GPS', price: 140000, originalPrice: 180000, category: 'accessories', image: 'https://images.unsplash.com/photo-1434493789847-2902a5203af7?q=80&w=300&auto=format&fit=crop' },
      { id: 17, name: 'Samsung Galaxy S22', specs: '128GB • Excellent', price: 420000, originalPrice: 500000, category: 'phones', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=300&auto=format&fit=crop' }
    ];

  return (
    <div className="shop-page">
      <div className="shop-header deals-header">
        <div className="deals-title-wrap">
          <Tag size={36} className="text-primary" />
          <h1>Hot Deals & Clearance</h1>
        </div>
        <p>Save up to 30% on these limited-time clearance items. Hurry, stock is extremely limited!</p>
      </div>
      
      <div className="shop-container">
        
        <main className="shop-main" style={{ gridColumn: '1 / -1' }}> {/* Full width since no sidebar needed for small clearance list */}
          <div className="shop-toolbar">
            <span className="results-count">Showing {dealsProducts.length} deals</span>
            
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <button className="sort-btn">Biggest Discount <ChevronDown size={16}/></button>
            </div>
          </div>
          
          <div className="shop-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {dealsProducts.map(product => (
              <div key={product.id} className="deal-card-wrapper">
                 <div className="discount-badge">SAVE {Math.round((1 - product.price/product.originalPrice)*100)}%</div>
                 {/* Hack: Pass originalPrice via a data attribute or modify ProductCard. 
                     Since we shouldn't extensively rewrite ProductCard right now, 
                     we'll just use the CSS pseudo-element trick if we had data attributes, 
                     but since we don't, we'll let ProductCard render as normal and the CSS
                     badge handles the "deal" look. */}
                 <ProductCard product={product} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Deals;
