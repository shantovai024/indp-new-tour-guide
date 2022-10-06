import React from 'react';
import guide from '../../images/guide.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-wrapper position-relative">
                <div className="row ">
                    <div className="col-xl-6 banner-height align-items-center d-flex">
                        <div className="banner-text">
                            <h2><span  className='text-primary'>Tour with Ahmed</span> Ultimate Travel Experience</h2>
                            <p>You can choose your favorite destination and start planning your long-awaited vacation. I offer thousands of destinations and have a wide variety of hotels so that you can host and enjoy your stay without problems.</p>
                            <button className='btn-common btn-1 me-4'>Get Started</button>
                            <button className='btn-common btn-2'>Learn More</button>
                        </div>
                    </div>
                    <div className="col-xl-6 banner-thumb">
                        <img src={guide} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;