import React from 'react';
import Rating from 'react-rating';
import './Testimonial.css'

const Testimonial = (props) => {
    const { name, Description, image, number } = props.testmonial;
    return (
        <div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className=" col-sm-11 col-md-9 col-lg-8 col-xl-7">
                        <div className="card">
                            <p className="post">
                                <span>{Description} </span> <span className="post-txt"></span></p>
                            <p> <Rating
                                initialRating={number}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color "
                                readonly ></Rating></p>
                        </div>
                        <div className="arrow-down"></div>
                        <div className="row d-flex justify-content-center">
                            <div className=""> <img className="profile-pic fit-image" src={image} alt='' /> </div>
                            <p className="profile-name">{name}</p>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Testimonial;