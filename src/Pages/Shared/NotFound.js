import React from 'react';
import sleep from '../../assets/images/sleep.avif';

const NotFound = () => {
    return (
        <div>
            <h1>404 page (not found page)</h1>
        
            <img  src={sleep} alt="" />
        </div>
    );
};

export default NotFound;