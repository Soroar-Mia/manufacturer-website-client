import React, { useEffect, useState } from 'react';
import Purchase from './Purchase';
import Service from './Service';

const Services = () => {

    const [services, setServices] = useState([]);
    const [items, setItems]= useState(null);

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    
    return (
        <div >
            <h2 className='text-xl text-secondary text-center my-12'> Our Parts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                    setItems={setItems}
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;