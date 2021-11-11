import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = (data) => {
        alert('okay')
        reset();
    }

    // const history = useHistory()
    // const location = useLocation()

    // const url = location?.state?.from || "/home"

    return (
        <div className="container w-75 bg-dark">
            <h3 className="mt-5 text-center text-info fw-bolder ">Login Form</h3>
            <div className="login-box ">
                <div className="  d-flex justify-content-center align-items-center  ">
                    <div className="login-form mt-4 w-50">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                placeholder="Your Email" />
                            {/* value={user.email} */}
                            <br />

                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Your password" />

                            <br />
                            {errors.exampleRequired && <span>This field is required</span>}


                            <input type="submit" value="Login" className="btn btn-info w-50" />
                        </form>
                        <div className="mt-4">
                            <p className="text-white">New to JI Watch? <Link className="text-decoration-none text-info" to="/register">Create Account</Link></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;