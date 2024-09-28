import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import { IoReorderThreeSharp } from "react-icons/io5";

function NavigationBar() {
  const [isNavVisible, setIsNavVisible] = useState(false); // State to track navbar visibility
  let see = "rgb(51, 65, 85)";

  // Function to toggle navbar visibility
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible); // Toggle state between true and false
  };

  return (
    <div className='text-white'>
      <div style={{ background: see }}>
        {/* React Icon, click to toggle navbar on mobile */}
        <div className="d-md-none react-icon-container justify-content-end" onClick={toggleNavVisibility}>
          <IoReorderThreeSharp className="react-icon" />
        </div>

        {/* Horizontal navbar for larger screens (>= 768px) */}
        <div className="d-none d-md-block m-auto">
          <ul className="nav justify-content-center p-3 fs-5">
            <li className='nav-item'>
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="about">
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="skills">
                Skills
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="extracirculum">
                Extracurricular
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Conditionally render the vertical navbar for mobile (less than 768px) */}
        {isNavVisible && (
          <div className="d-md-none m-auto">
            <ul className="nav flex-column p-3 fs-5">
              <li className='nav-link'>
                <NavLink className="nav-link" onClick={toggleNavVisibility} to="">
                  Home
                </NavLink>
              </li>
              <li className='nav-link'>
                <NavLink className="nav-link" onClick={toggleNavVisibility} to="about">
                  About
                </NavLink>
              </li>
              <li className='nav-link'>
                <NavLink className="nav-link" onClick={toggleNavVisibility} to="skills">
                  Skills
                </NavLink>
              </li>
              <li className='nav-link'>
                <NavLink className="nav-link" onClick={toggleNavVisibility} to="extracirculum">
                  Extracurricular
                </NavLink>
              </li>
              <li className='nav-link'>
                <NavLink className="nav-link" onClick={toggleNavVisibility} to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
