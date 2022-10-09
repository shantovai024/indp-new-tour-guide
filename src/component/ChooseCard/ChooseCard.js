import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ChooseCard = ({singleChoose}) => {
    let navigate = useNavigate();
    let location = useLocation();

    let {id, name, image, description} = singleChoose;
    return (
        <div className='col-md-4'>
            <img className='mb-4' src={image} alt="" />
            <h3 className='mb-4'>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ChooseCard;