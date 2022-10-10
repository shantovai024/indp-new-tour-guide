import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='offset-xl-2 col-xl-8 mt-5 blog-wrap'>
            <h2>What are the difference between authorization and authentication?</h2>
            <p>Authentication means to confirm someones identity. Authentication works through passwords, one-time pins, and other information provided by the user. It is visible to and partially changeable by the user. And Authorization means the process of verifying what specific applications, files, and data that user has access. It mainly takes place after authentication. And it is not visible to or changeable by the user.</p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>I am using firebase because it is a service of Google. So if i left the anxiety of security to Google LLC . Also it is very easy to learn & as many developer using this i can't but use this. There are a lof of firebase's alternatives such as Back4App, Backendless, Kuzzle, AWS Amplify, Pubnub etc.</p>
            <h2>What other services does firebase provide other than authentication</h2>
            <p>Except authentication firebase also provide some fantastic service. Firebase provides detailed documentation and cross-platform SDKs to build and ship apps on web, Android, iOS. Other services provided by firebase are Cloud Functions, Cloud Storage ,Hosting, Real Time DataBase, Analytics etc</p>
        </div>
    );
};

export default Blog;