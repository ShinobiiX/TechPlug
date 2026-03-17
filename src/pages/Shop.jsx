import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';
import './Shop.css';

// Expanded mock data for the shop
const shopProducts = [
  { id: 1, name: 'iPhone 13 Pro', specs: '128GB • Excellent', price: 580000, category: 'phones', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=300&auto=format&fit=crop' },
  { id: 2, name: 'MacBook Air M1', specs: '8GB • 256GB SSD', price: 850000, category: 'laptops', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop' },
  { id: 3, name: 'AirPods Pro 2', specs: 'USB-C • Noise Cancel', price: 120000, category: 'accessories', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop' },
  { id: 4, name: 'Apple Watch Series 8', specs: '45mm • GPS', price: 240000, category: 'accessories', image: 'https://images.unsplash.com/photo-1434493789847-2902a5203af7?q=80&w=300&auto=format&fit=crop' },
  { id: 5, name: 'iPhone 14 Pro Max', specs: '256GB • Like New', price: 950000, category: 'phones', image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=300&auto=format&fit=crop' }, // re-using image
  { id: 6, name: 'MacBook Pro 14"', specs: '16GB • 512GB • M2 Pro', price: 1650000, category: 'laptops', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop' }, // re-using image
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? shopProducts 
    : shopProducts.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>All Products</h1>
        <p>Browse our collection of premium, certified tech devices.</p>
      </div>
      
      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">
              <Filter size={18} /> Categories
            </h3>
            <ul className="filter-list">
              <li>
                <button 
                  className={activeCategory === 'all' ? 'active' : ''} 
                  onClick={() => setActiveCategory('all')}
                >
                  All Products
                </button>
              </li>
              <li>
                <button 
                  className={activeCategory === 'phones' ? 'active' : ''} 
                  onClick={() => setActiveCategory('phones')}
                >
                  iPhones
                </button>
              </li>
              <li>
                <button 
                  className={activeCategory === 'laptops' ? 'active' : ''} 
                  onClick={() => setActiveCategory('laptops')}
                >
                  MacBooks
                </button>
              </li>
              <li>
                <button 
                  className={activeCategory === 'accessories' ? 'active' : ''} 
                  onClick={() => setActiveCategory('accessories')}
                >
                  Accessories
                </button>
              </li>
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
            <span className="results-count">Showing {filteredProducts.length} results</span>
            
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <button className="sort-btn">Featured <ChevronDown size={16}/></button>
            </div>
          </div>
          
          <div className="shop-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
