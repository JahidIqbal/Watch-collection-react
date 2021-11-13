import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');

                }
            })
        reset();
    }
    return (
        <div className="container ">
            <h1 className="mt-5 text-center  w-50 mx-auto text-white">Add a Product</h1>
            <div className="login-box w-100">
                <div className="border border d-flex justify-content-center align-items-center bg-light ">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name")}
                                placeholder="name"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input {...register("image", { required: true })}
                                placeholder="image"
                                className="p-2 m-2 w-100" />
                            <br />
                            <textarea {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100" />
                            <br />


                            <input type="number" {...register("price", { required: true })} placeholder="price" className="p-2 m-2 w-100" />

                            <br />




                            <input type="submit" value="Add" className="btn btn-info w-25" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;