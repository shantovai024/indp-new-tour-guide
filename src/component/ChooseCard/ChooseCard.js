import React from 'react';
import './ChooseCard.css'

const ChooseCard = ({ singleChoose }) => {

    let { name, image, description } = singleChoose;
    return (
        <div className='col-md-4 choose-card'>
            <img className='mb-4' src={image} alt="" />
            <h3 className='mb-4'>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ChooseCard;