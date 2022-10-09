import React from 'react';
import './Error404Page.css'
import errorimg from '../../images/error-page.jpg'

const Error404Page = () => {
    return (
        <div className='error-img'>
            <img src={errorimg} alt="" />
        </div>
    );
};

export default Error404Page;