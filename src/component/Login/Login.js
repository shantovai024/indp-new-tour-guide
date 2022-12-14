import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        error
    ] = useSignInWithEmailAndPassword(auth);

    let emailRef = useRef('');
    let passwordRef = useRef('');
    let location = useLocation();
    let navigate = useNavigate()

    let from = location.state?.from?.pathname || '/'

    if (location.state?.from) {
        navigate(location.state.from)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    let handleLogIn = (event) => {
        event.preventDefault()
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    let loginToSignUp = (event) => {
        navigate('/signup')
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    return (
        <div className='login-wrapper '>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleLogIn}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <input ref={emailRef} type="email" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <input ref={passwordRef} type="password" name="password" id="password" required />
                        </div>
                    </div>
                    <button className='submit-btn' type='submit'>Login</button>
                </form>
                {errorElement}
                <SocialLogin></SocialLogin>
                <div className="sign-up-link mt-3">
                    <p>Don't have any account? <span onClick={loginToSignUp} className='sign-up-route text-primary'>Sign Up</span> Now</p>
                </div>
            </div>
        </div>
    );
};

export default Login;