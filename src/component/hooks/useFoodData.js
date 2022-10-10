import { useEffect, useState } from 'react';

let useFoodData = () => {
    let [foodData, setFoodData] = useState([])

    useEffect(() => {
        fetch('foodData.json')
            .then(res => res.json())
            .then(data => setFoodData(data))
    }, [])
    return { foodData, setFoodData }
};

export default useFoodData;