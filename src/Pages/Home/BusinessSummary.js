import React from 'react';
import Summary from './Summary';
import icons1 from '../../assets/icons/icons1.png';
import icons2 from '../../assets/icons/icons2.png';
import icons3 from '../../assets/icons/icons3.png';

const BusinessSummary = () => {
    const summarys  = [
        {
            _id: 1,
            name: 'Customers Reviews',
            description: '33K+',
            img: icons1
        },
        {
            _id: 2,
            name: ' Served Customers',
            description: '120M+',
            img: icons2
        },
        {
            _id: 3,
            name: 'Parts',
            description: '50K+',
            img: icons3
        }
    ];
    return (
        <div className='my-5 bg-violet-200'>
            <div className='text-center'>
                <h2 className='text-4xl py-10 text-purple-800'>Some summary of our Business</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    summarys.map(summary =><Summary
                        key={summary._id}
                        summary={summary}
                    ></Summary>)
                }
            </div>
        </div>
    );
};

export default BusinessSummary;