import React from 'react';
import './SingleFood.css'

const SingleFood = ({singleFoodData}) => {
    let {image} = singleFoodData;
    return (
        <div className='col-xl-6 single-food'>
            <img src={image} alt="" />
        </div>
    );
};

export default SingleFood;