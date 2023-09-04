import { Link } from 'react-router-dom';
import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <ul className="footer__list">
                    <li>
                        <Link className="footer__home" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='footer__about' to='/about'>About</Link>
                    </li>
                </ul>
                <div className='footer__contact'>
                    <p className='footer__contact__text'>Contact Us</p>
                    <p className='footer__contact__text'>Email:support@launchpad.com</p>
                    <p className='footer__contact__text'>Phone:+1 647 123 0000</p>
                </div>
            </div>
        </div>
    );
    }
    
export default Footer;