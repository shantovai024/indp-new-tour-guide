import { useEffect, useState } from 'react';

const useBedData = () => {
    let [bedData, setBedData] = useState([])

    useEffect(() => {
        fetch('bedData.json')
            .then(res => res.json())
            .then(data => setBedData(data))
    }, [])

    return { bedData, setBedData }
};

export default useBedData;