import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div className="container mt-4 bg-dark w-50">
            <h3 className="mt-5 text-center text-info fw-bolder ">Register Form</h3>
            {
                !isLoading && <form onSubmit={handleLoginSubmit}>
                    <input
                        style={{ width: '100%' }}
                        label="Your Email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        onBlur={handleOnChange}
                        required
                    />
                    <br />
                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="Your Password"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        onBlur={handleOnChange} />
                    <br />

                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="ReType Your Password"
                        type="password"
                        name="password2"
                        placeholder="Re-type Password"
                        onBlur={handleOnChange} />
                    <br />
                    <button className="btn btn-info mt-2 mb-2" type="submit">Register</button>


                    <p className="text-white fw-bolder">Already have a account? Please <Link className="text-decoration-none text-info" to="/login">login</Link></p>

                </form>}
            {isLoading && <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {user?.email && <div className="alert alert-success" role="alert">
                User created successFully!
            </div>}
            {authError && <div class="alert alert-danger" role="alert">
                {authError}
            </div>}


        </div>
    );
};

export default Register;