import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

const Homepage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/listings') // Fetch listings from the backend
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
















// import React, { useEffect, useState } from "react";
// import ListingCard from "../components/ListingCards";
// import "./HomePage.css";


// function HomePage() {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     fetch("/api/listings")
//       .then((res) => res.json())
//       .then((data) => setListings(data))
//       .catch((err) => console.error("Error fetching listings:", err));
//   }, []);

//   return (
//     <div className="home-page">
//       <h1>Property Listings</h1>
//       <div className="listings-grid">
//         {listings.map((listing) => (
//           <ListingCard key={listing.id} listing={listing} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;
