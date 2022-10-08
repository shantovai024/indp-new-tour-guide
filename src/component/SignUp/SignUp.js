import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    let navigate = useNavigate()
    return (
        <div className='login-wrapper'>
            <h2>Sign Up</h2>
            <form className=''>
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
                <button className='submit-btn' type='submit'>Login</button>
                <div className="input-wrapper">
                    <p className='text-center mt-3'>Or Login With</p>
                    <div className="google-auth-wrapper ">
                        <button className="google-btn-bg d-flex">
                            <span className='logo-icon'> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> </span>
                            <span className='logo-text'> Google</span>
                        </button>
                    </div>
                    <div className="sign-up-link mt-3">
                        <p onClick={() => navigate('/login')}>Already have an account? <Link className='sign-up-route'>Login</Link> Now</p>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default SignUp;