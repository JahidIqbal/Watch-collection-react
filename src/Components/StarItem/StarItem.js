import React from 'react';

const StarItem = ({ starDetail }) => {
    const { name, address, description, img } = starDetail;
    return (
        <div>
            <div className="item">
                <div className="shadow-effect">
                    <img src={img} alt="" srcSet='' className='img-circle' />
                    <p>{description}</p>
                </div>
                <div className="starItem-name">
                    <h5>{name}</h5>
                    <small>{address}</small>
                </div>
            </div>
        </div>
    );
};

export default StarItem;


