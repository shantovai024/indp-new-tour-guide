import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {

    let navigate = useNavigate();
    const [signInWithGoogle, user, ] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className="input-wrapper">
                <p className='text-center mt-3'>Or Login With</p>
                <div className="google-auth-wrapper ">
                    <button onClick={() => signInWithGoogle()} className="google-btn-bg d-flex">
                        <span className='logo-icon'> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> </span>
                        <span className='logo-text'> Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;