import React from 'react';
import { Link } from 'react-router-dom';
import brandicon from '../../images/watch.png'

const Mservice = (props) => {
    const { name, image, description, price, _id } = props.mservice;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-light"><img src={brandicon} alt="" width="25" />
                                Buy now</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mservice;