import React from 'react';
import './Footer.css'
import logo from '../../images/ahmed-tourism.png'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    return (
        <div className='row bg-semi-blue mt-5'>
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
            <h2 className='text-white'>Contact Information</h2>
            <ul className='footer-contact'>
                <li> <FontAwesomeIcon icon={faLocationPin}/> 39/A Godagari, Rajshahi</li>
                <li> <FontAwesomeIcon icon={faPhone}/> +8801767449099</li>
                <li><FontAwesomeIcon icon={faEnvelope}/> istiakahmed024@gmail.com</li>
            </ul>
           </div>
           
        </div>
    );
};

export default Footer;