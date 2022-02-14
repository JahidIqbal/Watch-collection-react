import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {

        fetch('https://glacial-temple-59647.herokuapp.com/ratings')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    return (


        <div className=" mx-auto mt-5">
            <h2 className=" fw-bolder display-4  w-100 mt-4 ">Our Loveable Customer </h2>

            {
                testimonials.length === 0 ?
                    <div className="spinner-border text-dark text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>

                    :
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                    >
                        {
                            testimonials.map(testmonial => <Testimonial key={testmonial._id} testmonial={testmonial}></Testimonial>)
                        }



                    </Carousel>
            }

        </div>
    );
};

export default Testimonials;