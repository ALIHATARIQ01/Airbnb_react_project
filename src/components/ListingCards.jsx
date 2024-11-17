import React from 'react';
import { Link } from "react-router-dom";
import './ListingCards.css';

const ListeningCards = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={listing.images[0]} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>Location: {listing.location}</p>
      <p>Price per night: ${listing.pricePerNight}</p>
      <Link to={`/listings/${listing.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
  
  
  // return (
  //   <div className="listing-card">
  //     <img src={image} alt={title} className="listing-image" />
  //     <div className="listing-details">
  //       <h3 className="listing-title">{title}</h3>
  //       <p className="listing-type">{propertyType}</p>
  //       <p className="listing-info">
  //         {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
  //       </p>
  //       <p className="listing-price">${price} per night</p>
  //       <p className="listing-rating">Rating: {rating}★</p>
  //     </div>
  //   </div>
  // );
};

export default ListeningCards;
























// import React from 'react';
// import ListingCards from './ListeningCards';

// //import './CardList.css';

// const CardList = ({ listings }) => {
//   return (
//     <div className="card-list">
//       {listings.map((listing, index) => (
//         <ListingCards
//           key={index}
//           image={listing.image}
//           title={listing.title}
//           propertyType={listing.propertyType}
//           guests={listing.guests}
//           bedrooms={listing.bedrooms}
//           bathrooms={listing.bathrooms}
//           price={listing.price}
//           rating={listing.rating}
//         />
//       ))}
//     </div>
//   );
// };

// export default CardList;














// // import React from 'react';
// // import './ListeningCards.css'; // Ensure you import your CSS file

// // const ListingCards = ({ image, title, propertyType, guests, bedrooms, bathrooms, price, rating }) => {
// //   return (
// //     <div className="listing-card">
// //       <img src={image} alt={title} className="listing-image" />
// //       <div className="listing-details">
// //         <h3 className="listing-title">{title}</h3>
// //         <p className="listing-type">{propertyType}</p>
// //         <p className="listing-info">
// //           {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms
// //         </p>
// //         <div className="listing-footer">
// //           <span className="price">${price} / night</span>
// //           <span className="rating">★ {rating}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListingCards;
