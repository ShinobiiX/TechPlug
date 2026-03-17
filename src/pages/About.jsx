import React from 'react';
import './About.css';
import { ShieldCheck, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About TechPlug</h1>
        <p>Your trusted source for premium, affordable tech.</p>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At TechPlug, we believe everyone deserves access to top-tier technology without breaking the bank. 
            We source the highest quality pre-owned and new devices, rigorously test them, and pass the savings on to you.
            Our goal is to be the ultimate 'plug' for reliable tech across the nation.
          </p>
        </section>

        <section className="about-values">
          <div className="value-card">
            <ShieldCheck size={32} className="value-icon" />
            <h3>Quality Guaranteed</h3>
            <p>Every device goes through a 40-point inspection process to ensure it meets our rigorous standards. We only sell what we would use ourselves.</p>
          </div>
          
          <div className="value-card">
            <Target size={32} className="value-icon" />
            <h3>Best Prices</h3>
            <p>By optimizing our supply chain and focusing on direct-to-consumer sales, we offer premium devices at up to 60% off traditional retail prices.</p>
          </div>
          
          <div className="value-card">
            <Users size={32} className="value-icon" />
            <h3>Customer First</h3>
            <p>We pride ourselves on exceptional post-purchase support. With our 90-day warranty and responsive service team, you're never left in the dark.</p>
          </div>
        </section>
        
        <section className="about-section text-center">
            <h2>Ready to upgrade?</h2>
            <p>Join thousands of satisfied customers who have made the switch to smarter tech shopping.</p>
            <a href="/shop" className="btn btn-primary mt-4">Shop Now</a>
        </section>
      </div>
    </div>
  );
};

export default About;
