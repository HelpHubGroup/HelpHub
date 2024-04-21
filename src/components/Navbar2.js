import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className='fas fa-seedling' />
            &nbsp;
            HELPHUB
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/user-view' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>
          
          <div className='nav-icons'>
            <Link to='/cart' className='nav-icon' onClick={closeMobileMenu}>
              <i className='fas fa-shopping-cart' />
            </Link>
            <Link to='/user-profile' className='nav-icon' onClick={closeMobileMenu}>
              <i className='fas fa-user-circle' />
            </Link>
          </div> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;