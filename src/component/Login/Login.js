import React from 'react';
import {useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);


    let navigate = useNavigate()

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/')
    }

    let handleLogIn = (event) => {
        event.preventDefault()
    }

    let loginToSignUp = (event) => {
        navigate('/signup')
    }


    return (
        <div className='login-wrapper'>
            <h2>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrapper">
                        <input type="text" name="email" id="email" />
                    </div>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <button className='submit-btn' type='submit'>Login</button>
                <div className="input-wrapper">
                    <p className='text-center mt-3'>Or Login With</p>
                    <div className="google-auth-wrapper ">
                        {errorElement}
                        <button onClick={() => signInWithGoogle()} className="google-btn-bg d-flex">
                            <span className='logo-icon'> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> </span>
                            <span className='logo-text'> Google</span>
                        </button>
                    </div>
                    <div className="sign-up-link mt-3">
                        <p>Don't have any account? <span onClick={loginToSignUp} className='sign-up-route text-primary'>Sign Up</span> Now</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;