import React from 'react';
import Rating from 'react-rating';
import './Testimonial.css'

const Testimonial = (props) => {
    const { name, Description, image, number } = props.testmonial;
    return (
        <div>
            <div>
                <img src={image} width="200" height="200" alt="..." />
                <div className="myCarousel">
                    <h3>{name}</h3>
                    <h4>Customer</h4>
                    <p>
                        {Description}
                    </p>
                    <span> <Rating
                        initialRating={number}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color "
                        readonly ></Rating></span>
                </div>
            </div>





        </div>
    );
};

export default Testimonial;