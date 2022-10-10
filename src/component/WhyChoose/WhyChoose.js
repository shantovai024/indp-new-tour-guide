import React from 'react';
import './WhyChoose.css'
import ChooseCard from '../ChooseCard/ChooseCard';
import useServiceData from '../hooks/useServiceData';

const WhyChoose = () => {
    let { chooseData, setChooseData } = useServiceData();

    return (
        <div className='text-center'>
            <h1 className='mb-5'><span className='text-primary'>Why Choose</span> Me?</h1>
            <div className="row text-center">
                {
                    chooseData.map((singleChoose) => <ChooseCard
                        key={singleChoose.id}
                        singleChoose={singleChoose}>
                    </ChooseCard>)
                }
            </div>
        </div>
    );
};

export default WhyChoose;