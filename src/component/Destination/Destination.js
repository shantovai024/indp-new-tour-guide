import React from 'react';
import Card from '../Card/Card';
import useLoadData from '../hooks/useLoadData';

const Destination = () => {
    let { data, setData } = useLoadData()

    return (
        <div>
            <div className="row mt-5 mb-5">
                <div className="col-xl-12">
                    <h1 className='text-center mb-5'><span className='text-secondary'>My Serviced</span> <span className='text-primary'>Location</span> </h1>
                    <div className='row g-4 '>
                        {data?.map((singleData) => <Card
                            key={singleData.id}
                            singleData={singleData}
                        ></Card>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;