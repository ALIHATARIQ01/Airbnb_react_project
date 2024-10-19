import React from 'react';
import './ListeningCards.css'; 

const ListingCards = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} className="listing-image" />
      <div className="listing-details">
        <h3 className="listing-title">{title}</h3>
        <p className="listing-type">{propertyType}</p>
        <p className="listing-info">
          {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
        </p>
        <div className="listing-footer">
          <span className="price">${price} / night</span>
          <span className="rating">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
