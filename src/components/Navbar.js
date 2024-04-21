import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartFoods, setCartFoods] = useState([]);


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
        <div className='navbar-container'>
        
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class='fas fa-seedling' />
          &nbsp;
          HELPHUB
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className='cart-icon'>
            
          
              <img src="../images/cart.png" alt="Cart" className='btn--image'/>
              
             
                
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
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
          {button && <Button buttonStyle='btn--outline2' destination='/sign-up' >REGISTER</Button>}
          {button && <Button buttonStyle='btn--outline'destination='/login'>LOGIN IN</Button>} 
          <br />
          {button && <Button buttonStyle='btn--outline'destination='/user-view'>Menu</Button>} 
      
          {props.loggedIn && <img src=''/>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
