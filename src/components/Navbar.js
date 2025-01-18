
import React from 'react';
import '../styles/navbar.css'
import logo from '../assets/Logo1.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#portfolio" className="navbar-link">Portafolio</a>
        <a href="#contact" className="navbar-link">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
