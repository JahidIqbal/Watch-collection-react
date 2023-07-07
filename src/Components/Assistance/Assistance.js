import React from "react";
import repairwatch from "../../images/repair.jpg";
import batteryRemover from "../../images/batteryremover.jpg";
import customRepair from "../../images/custom.jpg";

const Assistance = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src={repairwatch} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Watch repair</h5>
              <p class="card-text">
                Expert watch repair services for all types of timepieces,
                ensuring precision and care.
              </p>
            </div>
            <button className="btn btn-dark w-50 mx-auto">See more</button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src={batteryRemover} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Battery Remover</h5>
              <p class="card-text">
                Efficient battery remover tool for safely and easily extracting
                batteries from various watches.
              </p>
            </div>

            <button className="btn btn-dark w-50 mx-auto">See more</button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src={customRepair} class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">Custom Repair</h5>
              <p class="card-text">
                Exquisite custom watch repair, restoring personalized timepieces
                to their original glory.
              </p>
            </div>
            <button className="btn btn-dark w-50 mx-auto">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
