import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import cartImg from './images/cartPic.png'

function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartImg} alt="cart"/>
                          
          </Link>
        </div>
      
                   
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fas fa-seedling' />
          &nbsp;
          HELPHUB
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         
          <li className='nav-item'>
              <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                Cart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                REGISTER
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login In
              </Link>
            </li>
            
          </ul>
          {button && <Link to = "/sign-up"> 
          <Button buttonStyle='btn--outline2'>REGISTER</Button>
           </Link>}
          {button && <Link to = "/login">
          <Button buttonStyle='btn--outline'>LOGIN IN</Button>
            </Link>} 
            {button && <Link to = "/student"> 
          <Button buttonStyle='btn--outline2'>Student</Button>
           </Link>} 
           {button && <Link to = "/employee"> 
          <Button buttonStyle='btn--outline2'>Employee</Button>
           </Link>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
