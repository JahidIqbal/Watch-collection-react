import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://watch-server-pied.vercel.app/services", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Added Successfully");
        }
      });
    reset();
  };
  return (
    <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
      <h3 className="text-light fw-bolder ">ADD PRODUCT</h3>
      <div className="login-box w-50 justify-content-center mx-auto">
        <div
          className="border border d-flex justify-content-center align-items-center "
          style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}
        >
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("image", { required: true })}
                placeholder="image"
                className="p-2 m-2 w-100"
              />
              <br />
              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="price"
                className="p-2 m-2 w-100"
              />

              <br />

              <input
                type="submit"
                value="Submit"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
