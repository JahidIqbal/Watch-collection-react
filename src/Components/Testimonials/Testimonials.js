import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {

        fetch('https://glacial-temple-59647.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    return (
        // review part
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