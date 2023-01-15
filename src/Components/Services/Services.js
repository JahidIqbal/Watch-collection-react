import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://watch-collection-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" mx-auto mt-5">
      <h2 className=" fw-bolder display-4  w-100 mt-5">
        Our Best Watch Product{" "}
      </h2>

      {/* spinner added */}

      {services.length === 0 ? (
        <div className="spinner-border text-dark text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.slice(0, 9).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
