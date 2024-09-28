import React from 'react';
import './ProductCard.css'; 
import { height } from '@mui/system';

const ProductCard = ({ name, image, price, oldPrice, offer, rating, delivery }) => {
  return (
    <div className="amazon-product-card">
      <img  style={{ width: '250px', height: '250px' }} src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={index < rating ? "filled-star" : "empty-star"}>&#9733;</span>
          ))}
          <span className="rating-count">({rating})</span>
        </div>
        <div className="product-price-section">
          <span className="current-price">₹{price}</span>
          {oldPrice && <span className="old-price">₹{oldPrice}</span>}
        </div>
        {offer && <div className="product-offer">{offer}</div>}
        <div className="delivery-info">
          {delivery && <span>Delivery: {delivery}</span>}
        </div>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
