import React from 'react';
import useFoodData from '../hooks/useFoodData';
import SingleFood from '../SingleFood/SingleFood';

const Foods = () => {
    let { foodData, setFoodData } = useFoodData()
    return (
        <div>
              <h2 className='mt-3 mb-5'>Fresh <span className='text-primary'>Foods</span></h2>
            <div className="row g-4">
                {
                    foodData.map((singleFoodData) => <SingleFood
                        key={singleFoodData.id}
                        singleFoodData={singleFoodData}
                    ></SingleFood>)
                }
                
            </div>
        </div>
    );
};

export default Foods;