import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Sed ut perspiciatis
        </p>
        <p className='footer-subscription-text'>
        Amet, consectetur adAmet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.ipiscing elit, sed do eiusmod 
        </p>
        <Button buttonStyle='btn--outline2'>REGISTER</Button>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>TempAboutUS</Link>
            <Link to='/'>TempAboutUS</Link>
            <Link to='/'>TempAboutUS</Link>
            <Link to='/'>TempAboutUS</Link>
            <Link to='/'>TempAboutUS</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Community</h2>
            <Link to='/'>TempCommunity</Link>
            <Link to='/'>TempCommunity</Link>
            <Link to='/'>TempCommunity</Link>
            <Link to='/'>TempCommunity</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/'>TempResource</Link>
            <Link to='/'>TempResource</Link>
            <Link to='/'>TempResource</Link>
            <Link to='/'>TempResource</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HELPHUB
              <i class='fab fa-typo3' />
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
