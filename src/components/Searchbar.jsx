import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Where are you going?" />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;
