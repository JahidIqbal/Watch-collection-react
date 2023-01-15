import React, { useState } from "react";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://watch-server.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div
      className="adu"
      style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}
    >
      <h3 className="text-white fw-bolder ">ADMIN</h3>
      <form onSubmit={handleAdminSubmit}>
        <div class="input-group mb-3 mx-auto" style={{ width: "50%" }}>
          <input
            className="form-control "
            label="Email"
            type="email"
            placeholder="Email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <div class="input-group-append">
            <button type="submit" className=" btn btn-info">
              Make Admin
            </button>
          </div>
        </div>
      </form>
      {success && (
        <div className="alert alert-success" role="alert">
          Admin created successFully!
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
