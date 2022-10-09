import React, { useEffect, useState } from 'react';

const useServiceData = () => {
    let [chooseData, setchooseData] = useState([])
    
    useEffect(() => {
             fetch('chooseData.json')
            .then(res => res.json())
            .then(data => setchooseData(data))
    }, [])
    return { chooseData, setchooseData }
};

export default useServiceData;