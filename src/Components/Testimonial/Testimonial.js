import React from 'react';
import Rating from 'react-rating';


const Testimonial = (props) => {
    const { name, email, Description, image, number } = props.testmonial;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <img src={image} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h3>{email}</h3>
                        <p className="card-text"> <strong>Description:</strong> {Description}</p>

                        <Rating
                            initialRating={number}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color "
                            readonly ></Rating>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;