import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();

    const { register, trigger, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        // my addon
        data.status = 'pending';
        console.log(data)

        const isReady = window.confirm('are you sure to add this order?');
        if (isReady) {
            fetch("https://glacial-temple-59647.herokuapp.com/orders", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })

                .then((res) => res.json())
                .then((result) => {
                    if (result.acknowledged) {
                        alert('order added successfully');

                    }
                });
            reset();
        }
    };
    return (

        <div>
            {/* <h1 className="mt-5 text-center text-dark mb-4">Place Your Order</h1>
            <div className="border border d-flex justify-content-center align-items-center bg-light  mt-4">
                <div className="login-form mb-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            style={{ width: '350px' }}
                            {...register("name")}
                            defaultValue={user.displayName}
                            placeholder="Your Name"
                            className="p-2 mb-4"
                        />
                        <br />

                        <input
                            style={{ width: '350px' }}
                            {...register("email", { required: true })} defaultValue={user.email}
                            placeholder="Your Email"
                            className="p-2 m-2"
                        />
                        <br />
                        <input
                            style={{ width: '350px' }}
                            {...register("date", { required: true })}

                            placeholder="date"
                            defaultValue={new Date().toDateString()}
                            className="p-2 m-2"
                        />
                        <br />
                        <input
                            style={{ width: '350px' }}
                            {...register("Address", { required: true })}
                            placeholder="Address"
                            className="p-2 m-2 "
                        />
                        <br />
                        <input
                            style={{ width: '350px' }}
                            {...register("number", { required: true })}

                            placeholder="Phone number"
                            className="p-2 m-2"
                        />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" value="Purchasing" className="btn btn-info w-50" />
                    </form>

                </div>
            </div> */}




            <div className="container pt-5">
                <div className="row justify-content-sm-center pt-5">
                    <div className="col-sm-6 shadow round pb-3">
                        <h1 className="text-center pt-3 text-secondary">Example Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='name'
                                    defaultValue={user.displayName}
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("name", { required: "Name is Required" })}
                                    onKeyUp={() => {
                                        trigger("name");
                                    }}
                                />
                                {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    defaultValue={user.email}
                                    className={`form-control ${errors.email && "invalid"}`}
                                    {...register("email", {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    onKeyUp={() => {
                                        trigger("email");
                                    }}
                                />
                                {errors.email && (
                                    <small className="text-danger">{errors.email.message}</small>
                                )}
                            </div>


                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    placeholder="date"
                                    defaultValue={new Date().toDateString()}
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("date", { required: "Name is Required" })}
                                    onKeyUp={() => {
                                        trigger("date");
                                    }}
                                />

                            </div>



                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='Address'
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("Address", { required: "Address is Required" })}
                                    onKeyUp={() => {
                                        trigger("Address");
                                    }}
                                />
                                {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='phone'
                                    className={`form-control ${errors.phone && "invalid"}`}
                                    {...register("number", {
                                        required: "Phone is Required",
                                        pattern: {
                                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                            message: "Invalid phone no",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("number");
                                    }}
                                />
                                {errors.phone && (
                                    <small className="text-danger">{errors.phone.message}</small>
                                )}
                            </div>

                            <input
                                type="submit"
                                className="btn btn-info my-3"
                                value="Order Now"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default PlaceOrder;