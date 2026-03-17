import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ review }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
         {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
      </div>
      
      <p className="review-text">"{review.text}"</p>
      
      <div className="reviewer-info">
        <span className="reviewer-name">— {review.name}</span>
        {review.avatar && (
           <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
