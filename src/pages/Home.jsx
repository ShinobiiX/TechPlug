import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';

const mockProducts = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    specs: '128GB • Excellent',
    price: 580000,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=300&auto=format&fit=crop', // Placeholder Unsplash image for iPhone
    featured: true
  },
  {
    id: 2,
    name: 'MacBook Air M1',
    specs: '8GB • 256GB SSD',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=300&auto=format&fit=crop', // Placeholder for Macbook
    featured: false
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    specs: 'USB-C • Noise Cancel',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=300&auto=format&fit=crop', // Placeholder AirPods
    featured: false
  },
  {
    id: 4,
    name: 'Apple Watch Series 8',
    specs: '45mm • GPS',
    price: 240000,
    image: 'https://images.unsplash.com/photo-1434493789847-2902a5203af7?q=80&w=300&auto=format&fit=crop', // Placeholder Watch
    featured: false
  }
];

const mockReviews = [
  {
    id: 1,
    rating: 5,
    text: "Got my iPhone in 2 days. Looks brand new.",
    name: "Tolu A.",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    rating: 5,
    text: "Smooth checkout and great support.",
    name: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    rating: 5,
    text: "Best plug for affordable tech 🔥",
    name: "David K.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      
      <section className="bestsellers-section">
        <div className="section-header">
          <h2 className="section-title">Shop Bestsellers</h2>
          <a href="/shop" className="view-all-link">View All &rarr;</a>
        </div>
        
        <div className="products-grid">
          {mockProducts.map((product, index) => (
            <div key={product.id} className={`product-card-wrapper ${index === 0 ? 'featured-product' : ''}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="trust-indicators">
          <div className="trust-item">
             <span className="stars">★★★★★</span>
             <span>4.8/5 from 2,000+ Customers</span>
          </div>
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span>100% Verified Devices</span>
          </div>
          <div className="trust-item">
            <Truck size={20} className="trust-icon black" />
            <span>Nationwide Delivery</span>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="testimonials-grid">
           {mockReviews.map((review) => (
             <TestimonialCard key={review.id} review={review} />
           ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
