import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ singleData }) => {
    let navigate = useNavigate();

    let { name, image, description, price } = singleData;

    return (
        <div className='col-md-6 col-lg-4 single-card'>
            <div className='card'>
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h4>Cost Per Day: <span className='text-primary'>{price}</span></h4>
                </div>
                <button onClick={() => navigate('/checkout')} className='checkout-btn'>Check Out</button>
            </div>
        </div>
    );
};

export default Card;