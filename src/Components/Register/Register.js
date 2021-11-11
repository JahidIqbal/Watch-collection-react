import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
        alert('register done')
        reset();
    }
    // const history = useHistory()
    // const location = useLocation()

    // const url = location?.state?.from || "/home"

    return (
        <div className="container w-75 bg-dark">
            <h3 className="mt-5 text-center text-info fw-bolder ">Register Form</h3>
            <div className="login-box ">
                <div className="  d-flex justify-content-center align-items-center  ">
                    <div className="login-form mt-4 w-50">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" type="name" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Your name" />
                            <br />

                            <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Your Email" />
                            {/* value={user.email} */}
                            <br />

                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Your password" />

                            <br />

                            <input name="password 2" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Re-type-password" />

                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />

                            <input type="submit" value="Register" className="btn btn-info w-75" />
                        </form>
                        <div className="mt-4">
                            <p className="text-white">Already Registered? Please <Link className="text-decoration-none text-info" to="/login">Login</Link></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;