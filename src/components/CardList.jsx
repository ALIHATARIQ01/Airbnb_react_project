import React from 'react';
import ListeningCards from './ListingCards';
import './CardList.css';

const CardList = ({ listings }) => {
  return (
    <div className="card-list">
      {listings.map((listing, index) => (
        <ListeningCards
          key={index}
          image={listing.image}
          title={listing.title}
          propertyType={listing.propertyType}
          guests={listing.guests}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          price={listing.price}
          rating={listing.rating}
        />
      ))}
    </div>
  );
};

export default CardList;
