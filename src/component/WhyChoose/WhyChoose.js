import React from 'react';
import ChooseCard from '../ChooseCard/ChooseCard';
import useServiceData from '../hooks/useServiceData';

const WhyChoose = () => {
    let { chooseData, setChooseData } = useServiceData();

    return (
        <div className='text-center'>
            <h2 className='mb-5'><span className='text-primary'>Why Choose</span> Me?</h2>
            <p></p>
            <div className="row text-center">
                {
                    chooseData.map((singleChoose) => <ChooseCard
                    key= {singleChoose.id}
                    singleChoose = {singleChoose}
                    >
                    </ChooseCard>)
                }
            </div>
        </div>
    );
};

export default WhyChoose;