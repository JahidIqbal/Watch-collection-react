import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://glacial-temple-59647.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            <h2 className=" fw-bolder display-4  w-100 ">Our Best Watch Product </h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">

                {
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }




            </div>

        </div>
    );
};

export default Services;