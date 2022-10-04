import React from 'react';
import useLoadData from '../hooks/useLoadData';

const Destination = () => {
    let {data, setData} = useLoadData()

    return (
        <div>
            <div className="row mt-5">
                <div className="col-xl-12">
                    <h1 className='text-center'><span className='text-secondary'>My Serviced</span> <span className='text-primary'>Location</span> </h1>
                </div>

            </div>

        </div>
    );
};

export default Destination;