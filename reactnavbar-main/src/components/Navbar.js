import React, { useState } from "react";
import "./navbar.css";
import { FaSearch} from "react-icons/fa";
import { MdArrowDropDown} from "react-icons/md";

import { ImLocation} from "react-icons/im";
import { FaUserAlt} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa"


import { GiHamburgerMenu } from "react-icons/gi";
// import search from "./search.png";
import { NavLink } from "react-router-dom";
import firefoxlogo from './firefoxlogo.svg';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src={firefoxlogo} alt="ogo"/>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">BIKES <i><MdArrowDropDown/></i></NavLink>
            </li>
         
              <NavLink to="/about">ACCESSORIES<i><MdArrowDropDown/></i>
              </NavLink>
            <li>
              <NavLink to="/service">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/contact">#GOBIKING TRIBE</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                
                target="__blank">
                <FaSearch className="search-icon" />
              </a>
          
              
            </li>
           
            <li>
              <a            
                target="__blank">
                <ImLocation className="gps-icon" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="__blank">
                <FaUserAlt className="user-icon" />
              </a>
            </li>
            <li>
              <a            
                target="__blank">
                <FaShoppingCart className="cart-icon" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};


export default Navbar;
