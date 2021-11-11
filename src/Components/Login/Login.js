import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className="container mt-4 bg-dark w-50">
            <h3 className="mt-5 text-center text-info fw-bolder ">Login Form</h3>
            <form onSubmit={handleLoginSubmit}>
                <input
                    style={{ width: '100%' }}
                    label="Your Email"
                    name="email"
                    placeholder="Your Email"
                    onBlur={handleOnChange}
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
                <button className="btn btn-info mt-2 mb-2" type="submit">Login</button>
                {isLoading && <div className="spinner-border text-info text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                {user?.email && <div className="alert alert-success" role="alert">
                    User created successFully!
                </div>}
                {authError && <div class="alert alert-danger" role="alert">
                    {authError}
                </div>}

                <p className="text-white fw-bolder">New User? Please <Link className="text-decoration-none text-info" to="/register">Register</Link></p>
            </form>



        </div>
    );
};

export default Login;