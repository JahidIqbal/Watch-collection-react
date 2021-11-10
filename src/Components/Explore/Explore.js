import React, { useEffect, useState } from 'react';
import Mservice from '../Mservice/Mservice';

const Explore = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setMoreServices(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            <h2 className=" fw-bolder display-4 w-100 ">Explore more Watch Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    moreServices.slice(7, 17).map(mservice => <Mservice key={mservice._id} mservice={mservice}></Mservice>)
                }




            </div>

        </div>
    );
};

export default Explore;