import React from 'react';
import './Hotels.css'
import useBedData from '../hooks/useBedData';
import SingleBed from '../SingleBed/SingleBed';

const Hotels = () => {
    let { bedData, setBedData } = useBedData()

    return (
        <div>
            <h2 className='mt-3 mb-5'>Hotel <span className='text-primary '>Bed</span></h2>
            <div className="row g-4">
                {
                    bedData.map((singleBedData) => <SingleBed
                        key={singleBedData.id}
                        singleBedData={singleBedData}
                    ></SingleBed>)
                }

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Hotels;