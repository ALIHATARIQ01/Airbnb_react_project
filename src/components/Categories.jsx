import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        'Beachfront',
        'Cabins',
        'Trending',
        'Villas',
        'Unique stays',
        'Mountains',
        'Luxury Homes',
        'Budget Stays',
        'Countryside',
        'Pet-Friendly',
        'Historic Homes',
        'Modern Apartments',
        'Rural Retreats',
        'Eco-Friendly Stays',
        'Family-Friendly',
        'Lofts',
        'Small Hotels'
      ];
      

    return (
        <div className="categories">
            {categories.map((category, index) => (
                <button key={index} className="category-button">
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
