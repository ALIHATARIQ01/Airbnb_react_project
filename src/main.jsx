<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import house1 from '/src/image/house1.jpg';
import house2 from '/src/image/house2.jpg';
import house3 from '/src/image/house3.jpg';
import house4 from '/src/image/house4.jpg';
import house5 from '/src/image/house5.jpg';
import Navbar from './components/Navbar.jsx';
import Categories from './components/Categories.jsx';
import ListingCards from './components/ListeningCards.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Categories />
    
    {/* Wrap all ListingCards inside a container with the .card-list class */}
    <div className="card-list">
      <ListingCards
        image={house1}
        title="Cozy Beach House"
        propertyType="Entire home"
        guests={4}
        bedrooms={2}
        bathrooms={1}
        price={120}
        rating={4.8}
      />
      <ListingCards
        image={house2}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
      <ListingCards
         image={house3}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
      <ListingCards
         image={house4}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
      <ListingCards
         image={house5}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
      <ListingCards
      image={house1}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
       <ListingCards
      image={house1}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
       <ListingCards
      image={house1}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
       <ListingCards
      image={house1}
        title="Modern Apartment"
        propertyType="Private room"
        guests={2}
        bedrooms={1}
        bathrooms={1}
        price={75}
        rating={4.6}
      />
    
    </div>
    <Footer />
  </StrictMode>,
);
=======
import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import './App.css';

// Import components
import Navbar from './components/Navbar.jsx';
import Categories from './components/Categories.jsx';
import Footer from './components/Footer.jsx';
import CardList from './components/CardList';
import ListingDetails from './components/ListingDetails';
import BookingPage from './components/BookingPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  // State to manage listings data
  const [listings, setListings] = useState([]);

  // Fetch listings data from API on component mount
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
    fetchListings();
  }, []);

  return (
    <StrictMode>
      <Router>
        <Navbar />
        <Categories />
        <Routes>
          <Route path="/" element={<HomePage listings={listings} />} />
          <Route path="/listings/:id" element={<ListingDetails />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<App />);
























// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import './App.css';
// import house1 from '/src/image/house1.jpg';
// import house2 from '/src/image/house2.jpg';
// import house3 from '/src/image/house3.jpg';
// import house4 from '/src/image/house4.jpg';
// import house5 from '/src/image/house5.jpg';
// import Navbar from './components/Navbar.jsx';
// import Categories from './components/Categories.jsx';
// import Footer from './components/Footer.jsx';
// import CardList from './components/CardList';


// const listings = [
//   { image: house1, title: "Cozy Beach House", propertyType: "Entire home", guests: 4, bedrooms: 2, bathrooms: 1, price: 120, rating: 4.8 },
//   { image: house2, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house3, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house4, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house5, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house1, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house2, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
//   { image: house3, title: "Modern Apartment", propertyType: "Private room", guests: 2, bedrooms: 1, bathrooms: 1, price: 75, rating: 4.6 },
// ];
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Navbar />
//     <Categories />
//     <CardList listings={listings} />
//     <Footer />
//   </StrictMode>,
// );
>>>>>>> a0f2e31 (Phase 2 changes)
