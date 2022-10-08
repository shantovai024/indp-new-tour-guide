import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './SignUp.css'

const SignUp = () => {
    let navigate = useNavigate();
    let [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signUpToLogin = () => {
        navigate('/login')
    }

    let handleRegister = event => {

        event.preventDefault()
        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }

    if (user) {
        navigate('/')
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'> {error?.message}</p>
        console.log(error.message);
    }

    return (
        <div className='login-wrapper'>
            <h2>Sign Up</h2>
            <form onSubmit={handleRegister}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <div className="input-wrapper">
                        <input type="text" name="name" id="name" />
                    </div>
                </div>
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
                <input onClick={() => setAgree(!agree)} className='me-3' type="checkbox" name='terms' id='terms' />

                <label className={`${agree ? 'text-primary' : 'text-danger'}`} htmlFor='terms'>Accept the Terms & Condition</label>

                {errorElement}

                <button disabled={!agree} className='submit-btn' type='submit'>Signup</button>
                <div className="input-wrapper">
                    <p className='text-center mt-3'>Or Login With</p>
                    <div className="google-auth-wrapper ">
                        <button className="google-btn-bg d-flex">
                            <span className='logo-icon'> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> </span>
                            <span className='logo-text'> Google</span>
                        </button>
                    </div>
                    <div className="sign-up-link mt-3">
                        <p>Already have an account? <span onClick={signUpToLogin} className='sign-up-route text-primary'>Login</span> Now</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;