import React from 'react';
import profile_pic from '../../images/profile-pic.png'
import './About.css'

const About = () => {
    return (
        <div className='row mt-5'>
            <div className="col-xl-4 ">
                <div className="profile-pic-area">
                    <img src={profile_pic} alt="" />
                </div>
            </div>
            <div className="col-xl-8 mt-5">
                <div className="profile-description">
                    <h3>About <span className='text-primary'>Me</span></h3>
                    <p>Assalamualikum. I am Istiak Ahmed Shanto, Front end Developer. I have experience on React and WordPress. I am enthusiastic on every aspect of tech. I prefer to like new things and experiment on that to improve my knowledge. I worked hard to achieve my goal. I don't like to compromise with anything to do my work in proper time. And by doing these continuously i want to succeed in my future life. </p>
                </div>
            </div>
        </div>
    );
};

export default About;