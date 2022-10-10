import React from 'react';
import './SingleBed.css'

const SingleBed = ({ singleBedData }) => {
    let { image } = singleBedData;
    return (
        <div className='col-xl-6 single-bed'>
            <img src={image} alt="" />
        </div>
    );
};

export default SingleBed;