import React from 'react';
import './Header.css'
import logo from '../../images/ahmed-tourism.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    let [user] = useAuthState(auth)
    
    let handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-3 col-sm-12 header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-9 col-sm-12">
                    <nav>
                        <ul className='nav-right header-menu'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/hotels'}>Hotel</Link></li>
                            <li><Link to={'/foods'}>Foods</Link></li>
                            <li>{user ? <button onClick={handleSignOut}>Sign Out </button> :
                                <Link to={'/login'}>Login</Link>
                            }</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;