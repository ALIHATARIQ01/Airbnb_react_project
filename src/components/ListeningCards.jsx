import React from 'react';
import { FaBed, FaBath, FaUserFriends, FaStar } from 'react-icons/fa'; // Import icons
import './ListingCards.css'; // CSS for ListingCard

const ListingCard = ({ image, title, propertyType, guests, bedrooms, bathrooms, pricePerNight, rating }) => {
    return (
        <div className="listing-card">
            <img src={image} alt={title} className="property-image" />
            <div className="property-details">
                <h3>{title}</h3>
                <p>{propertyType}</p>
                <div className="property-info">
                    <span><FaUserFriends /> {guests} guests</span>
                    <span><FaBed /> {bedrooms} bedrooms</span>
                    <span><FaBath /> {bathrooms} bathrooms</span>
                </div>
                <div className="price-rating">
                    <span>${pricePerNight} / night</span>
                    <span>
                        <FaStar color="#ff385c" /> {rating}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;






