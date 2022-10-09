import React from 'react';
import './Card.css'

const Card = ({ singleData }) => {

    let { name, image, description } = singleData;

    return (
        <div className='col-md-4 single-card'>
            <div className='card'>
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;