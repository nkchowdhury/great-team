import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
              
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>

            
        </div>
    );
};

export default Navbar;