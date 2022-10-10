import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ singleData }) => {
    let navigate = useNavigate();

    let { name, image, description } = singleData;

    return (
        <div className='col-md-4 single-card'>
            <div className='card'>
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                </div>
                <button onClick={()=> navigate('/checkout')} className='checkout-btn'>Check Out</button>
            </div>
            
        </div>
    );
};

export default Card;