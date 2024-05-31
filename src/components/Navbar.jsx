import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">CodeCraftShiv</div>
      <ul>
        <NavLink to="/" exact activeClassName="active"><li>Home</li></NavLink>
        <NavLink to="/about" activeClassName="active"><li>About</li></NavLink>
        <NavLink to="/services" activeClassName="active"><li>Services</li></NavLink>
        <NavLink to="/contact" activeClassName="active"><li>Contact</li></NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
