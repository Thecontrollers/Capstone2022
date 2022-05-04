import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >
            <img src = "images/WCE_Assets/NewWildcatEsportsLogo_NO_TEXT.png" alt = "WCE topleft" width="60" height="49"/>
              Wildcat Esports
          </Link>
          <div className='menu-icon' ></div>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/schedule' className='nav-links' >
                Schedule
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Teams' className='nav-links'>
               Teams
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/staff' className='nav-links'>
               Staff
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Merchandise' className='nav-links'>
              Merchandise
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
