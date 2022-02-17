import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <TeamMembers></TeamMembers>
            <Gallery></Gallery>
            <Blog></Blog>

        </div>
    );
};

export default Home;