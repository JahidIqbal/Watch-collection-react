import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div>
            <h2 className="mt-5 text-center text-info mb-4">Place Your Order</h2>
            <div className="border border d-flex justify-content-center align-items-center bg-light card mt-4">

                <div className="login-form mb-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            style={{ width: '350px' }}
                            {...register("name")}
                            placeholder="Your Name"
                            className="p-2 mb-4"
                        />
                        <br />

                        <input
                            style={{ width: '350px' }}
                            {...register("email", { required: true })} value={user.email}
                            placeholder="Your Email"
                            className="p-2 m-2"
                        />
                        <br />
                        <input
                            style={{ width: '350px' }}
                            {...register("date", { required: true })}

                            placeholder="date"
                            defaultValue={new Date()}
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
            </div>
        </div>



    );
};

export default PlaceOrder;