import React from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';
import '../pages/Shop.css';

const Accessories = () => {
    // Mock data for accessories
    const accessoryProducts = [
      { id: 3, name: 'AirPods Pro 2', specs: 'USB-C • Noise Cancel', price: 120000, image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop' },
      { id: 4, name: 'Apple Watch Series 8', specs: '45mm • GPS', price: 240000, image: 'https://images.unsplash.com/photo-1434493789847-2902a5203af7?q=80&w=300&auto=format&fit=crop' },
      { id: 11, name: 'Sony WH-1000XM5', specs: 'Wireless Noise Canceling', price: 280000, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=300&auto=format&fit=crop' },
      { id: 12, name: '20W USB-C Power Adapter', specs: 'Fast Charging', price: 15000, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=300&auto=format&fit=crop' }
    ];

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Accessories</h1>
        <p>Enhance your tech experience with premium accessories.</p>
      </div>
      
      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="filter-group mt-4">
             <h3 className="filter-title">Type</h3>
             <ul className="filter-list">
               <li><button className="active">All Accessories</button></li>
               <li><button>Audio</button></li>
               <li><button>Wearables</button></li>
               <li><button>Chargers</button></li>
             </ul>
          </div>
        </aside>
        
        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">Showing {accessoryProducts.length} results</span>
            
            <div className="sort-dropdown">
              <span>Sort by:</span>
              <button className="sort-btn">Featured <ChevronDown size={16}/></button>
            </div>
          </div>
          
          <div className="shop-grid">
            {accessoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accessories;
