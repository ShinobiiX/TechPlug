import React from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';
import '../pages/Shop.css';

const Laptops = () => {
    // Mock data for laptops
    const laptopProducts = [
      { id: 2, name: 'MacBook Air M1', specs: '8GB • 256GB SSD', price: 850000, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop' },
      { id: 6, name: 'MacBook Pro 14"', specs: '16GB • 512GB • M2 Pro', price: 1650000, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=300&auto=format&fit=crop' },
      { id: 9, name: 'Dell XPS 13', specs: '16GB • 512GB SSD • i7', price: 920000, image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=300&auto=format&fit=crop' },
      { id: 10, name: 'ThinkPad X1 Carbon', specs: '16GB • 1TB SSD', price: 1050000, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=300&auto=format&fit=crop' }
    ];

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Laptops</h1>
        <p>High-performance laptops for work, study, and play.</p>
      </div>
      
      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="filter-group mt-4">
             <h3 className="filter-title">Brand</h3>
             <ul className="filter-list">
               <li><button className="active">All Brands</button></li>
               <li><button>Apple</button></li>
               <li><button>Dell</button></li>
               <li><button>Lenovo</button></li>
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
            <span className="results-count">Showing {laptopProducts.length} results</span>
            
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <button className="sort-btn">Featured <ChevronDown size={16}/></button>
            </div>
          </div>
          
          <div className="shop-grid">
            {laptopProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Laptops;
