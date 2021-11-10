import React from 'react';
import { Link } from 'react-router-dom';
import brandicon from '../../images/watch.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
                <div className="container-fluid ">
                    <Link className="navbar-brand h5 text-white" to="/icon">JIWatch <img src={brandicon} alt="" width="50" />

                    </Link>

                    <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=" btn-light navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active text-white " to="/explore">Explore</Link>
                            <Link className="nav-link active text-white" to="/">Dashboard</Link>
                            <Link className="nav-link active text-white" to="/">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;