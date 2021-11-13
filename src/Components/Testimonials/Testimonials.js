import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/ratings')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    return (
        <div className=" mx-auto mt-5">
            <h2 className=" fw-bolder display-4  w-100 ">Our Loveable Customer </h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    testimonials.map(testmonial => <Testimonial key={testmonial._id} testmonial={testmonial}></Testimonial>)
                }




            </div>

        </div>
    );
};

export default Testimonials;