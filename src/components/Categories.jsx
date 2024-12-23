import React from "react";
import { FaHotel, FaCity, FaMountain, FaCrown, FaIgloo, FaBed, FaHome, FaFortAwesome } from "react-icons/fa";
import './Categories.css'; // Link to your CSS

const Categories = () => {
  const categories = [
    { name: "Rooms", icon: <FaHotel /> },               // Hotel/Rooms icon
    { name: "Icons", icon: <FaCrown /> },               // Icons placeholder 
    { name: "Top cities", icon: <FaCity /> },           // City icon
    { name: "Amazing views", icon: <FaMountain /> },    // Mountain/Amazing views icon
    { name: "Luxe", icon: <FaCrown /> },                // Luxe/Crown icon
    { name: "Arctic", icon: <FaIgloo /> },              // Arctic/Igloo icon
    { name: "Bed & Breakfasts", icon: <FaBed /> },      // Bed icon
    { name: "Mansions", icon: <FaHome /> },             // Mansion/Home icon
    { name: "Castles", icon: <FaFortAwesome /> },       // Castle icon
  ];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button className="category-button" key={index}>
          {category.icon} {/* Icon */}
          <span className="category-name">{category.name}</span> {/* Text */}
        </button>
      ))}
    </div>
  );
};

export default Categories;






















// import React from 'react';
// import './Categories.css';

// const Categories = () => {
//     const categories = [
//         'Beachfront',
//         'Cabins',
//         'Trending',
//         'Villas',
//         'Unique stays',
//         'Mountains',
//         'Luxury Homes',
//         'Budget Stays',
//         'Countryside',
//         'Pet-Friendly',
//         'Historic Homes',
//         'Modern Apartments',
//         'Rural Retreats',
//         'Eco-Friendly Stays',
//         'Family-Friendly',
//         'Lofts',
//         'Small Hotels'
//       ];
      

//     return (
//         <div className="categories">
//             {categories.map((category, index) => (
//                 <button key={index} className="category-button">
//                     {category}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default Categories;
