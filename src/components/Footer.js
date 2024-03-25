import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'> 
        <h2 className='footer-text'>Lets Work Together and build a better Tommorow</h2>
        <Button buttonStyle='btn--outline2'>REGISTER</Button>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Contact Info</Link>
            <Link to='/'>Mission</Link>
            <Link to='/'>Partners</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Overview</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>          
          <div class='footer-link-items'>
          <h2>Community</h2>
          <a href='https://pantry.fieldandfork.ufl.edu/resources/state_national/'>State and National Resources</a>
          <a href='https://pantry.fieldandfork.ufl.edu/resources/local/'>Local and Campus Resources</a>
          <a href='https://pantry.fieldandfork.ufl.edu/resources/recipes/'>Recipes Resources</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          &nbsp;
            <Link to='/' className='social-logo'>
            <i class='fas fa-seedling' />
            &nbsp;
              HELPHUB
            </Link>
          </div>
          <small class='website-rights'>HELPHUB © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
