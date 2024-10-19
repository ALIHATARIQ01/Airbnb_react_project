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
