import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import '../pages/Shop.css'; // Reusing shop styles

const Phones = () => {
    // Mock data for phones
    const phoneProducts = [
      { id: 1, name: 'iPhone 13 Pro', specs: '128GB • Excellent', price: 580000, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=300&auto=format&fit=crop' },
      { id: 5, name: 'iPhone 14 Pro Max', specs: '256GB • Like New', price: 950000, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=300&auto=format&fit=crop' },
      { id: 7, name: 'iPhone 12', specs: '64GB • Good Condition', price: 320000, image: 'https://images.unsplash.com/photo-1605236453806-6ff368528892?q=80&w=300&auto=format&fit=crop' },
      { id: 8, name: 'Samsung Galaxy S23 Ultra', specs: '512GB • Excellent', price: 890000, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=300&auto=format&fit=crop' }
    ];

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Smartphones</h1>
        <p>Browse our collection of premium, certified unlocked smartphones.</p>
      </div>
      
      <div className="shop-container">
        {/* Reusing sidebar layout */}
        <aside className="shop-sidebar">
          <div className="filter-group mt-4">
             <h3 className="filter-title">Brand</h3>
             <ul className="filter-list">
               <li><button className="active">All Brands</button></li>
               <li><button>Apple</button></li>
               <li><button>Samsung</button></li>
               <li><button>Google</button></li>
             </ul>
          </div>
          <div className="filter-group mt-4">
             <h3 className="filter-title">Price Range</h3>
             <div className="price-inputs">
                <input type="number" placeholder="Min ₦" />
                <span>-</span>
                <input type="number" placeholder="Max ₦" />
             </div>
             <button className="btn btn-secondary w-100 mt-2">Apply</button>
          </div>
        </aside>
        
        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">Showing {phoneProducts.length} results</span>
            
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <button className="sort-btn">Featured <ChevronDown size={16}/></button>
            </div>
          </div>
          
          <div className="shop-grid">
            {phoneProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Phones;
