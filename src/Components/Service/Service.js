import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import brandicon from '../../images/watch.png'

const Service = (props) => {
    const { name, image, description, price, _id } = props.service;
    return (
        <div data-aos="flip-right">
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-dark"><img src={brandicon} alt="" width="25" />
                                Buy now</button>
                        </Link>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;