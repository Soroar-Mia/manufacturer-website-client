import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Ourusers from './Ourusers';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <BusinessSummary></BusinessSummary>
            <Ourusers></Ourusers>
            <Contact></Contact>
        </div>
    );
};

export default Home;