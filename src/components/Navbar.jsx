import React, { useState } from 'react';
import './Navbar.css';
import logo from '../image/logo1.png'; // Update the path to your logo
import SearchBar from './Searchbar';
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon

const Navbar = () => {
    const [showAuthOptions, setShowAuthOptions] = useState(false); 

    const toggleAuthOptions = () => {
        setShowAuthOptions(!showAuthOptions); 
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Renter Logo" className="logo-image" />
            </div>
            <div className="navbar-search">
                <SearchBar />
            </div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Experiences</li>
                <li>Online Experiences</li>
            </ul>
            <div className="navbar-user">
                <FaUserCircle className="profile-icon" onClick={toggleAuthOptions} /> {/* Add the profile icon here */}
                {showAuthOptions && ( // Conditionally render login/signup options
                    <div className="auth-options">
                        <button onClick={() => {}}>Login</button>
                        <button onClick={() => {}}>Signup</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
