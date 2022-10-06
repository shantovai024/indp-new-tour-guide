import React from 'react';
import './Footer.css'
import logo from '../../images/ahmed-tourism.png'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className='row text-center bg-semi-blue'>
            <div className="col-xl-6">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className='footer-menu'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
                <div className="footer-social">
                    <ul>
                        <li> <Link> <FontAwesomeIcon icon={faFacebook} /></Link> </li>
                        <li> <Link> <FontAwesomeIcon icon={faTwitter} /></Link> </li>
                        <li> <Link> <FontAwesomeIcon icon={faInstagram} /></Link> </li>
                        <li> <Link> <FontAwesomeIcon icon={faYoutube} /></Link> </li>
                        <li> <Link> <FontAwesomeIcon icon={faLinkedinIn} /></Link> </li>

                    </ul>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="other-info">
                    <ul>
                        <li><Link>Faq's</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Terms & Condition</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;