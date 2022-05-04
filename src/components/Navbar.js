import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

 // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' >
            <img src = "images/WCE_Assets/NewWildcatEsportsLogo_NO_TEXT.png" alt = "WCE topleft" width="60" height="49"/>
              Wildcat Esports
            <i class='fab fa-typo3' />
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
            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
