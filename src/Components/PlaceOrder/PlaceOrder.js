import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
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
            <h1 className="mt-5 text-center text-dark mb-4">Place Your Order</h1>
            <div className="border border d-flex justify-content-center align-items-center bg-light card mt-4">
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
            </div>
        </div>



    );
};

export default PlaceOrder;