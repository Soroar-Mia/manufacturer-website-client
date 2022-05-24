import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    return (
        <div >
            <h2 className='text-xl text-secondary text-center my-12'>OUR ALL PARTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Part
                    key={service._id}
                    service={service}
                >
                </Part>)
            }
            </div>
        </div>
    );
};

export default Parts;