import React, { useEffect, useState } from "react";
import Mservice from "../Mservice/Mservice";

const Explore = () => {
  const [moreServices, setMoreServices] = useState([]);
  useEffect(() => {
    fetch("https://watch-collection-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setMoreServices(data));
  }, []);

  return (
    <div className=" mx-auto mb-5">
      <h2 className=" fw-bolder display-4 w-100 ">
        Explore more Watch Products
      </h2>

      {moreServices.length === 0 ? (
        <div className="spinner-border text-dark text-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {moreServices.map((mservice) => (
            <Mservice key={mservice._id} mservice={mservice}></Mservice>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
