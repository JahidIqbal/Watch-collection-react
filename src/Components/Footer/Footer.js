import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer bg-dark text-white">
                <div className="container text-center text-md-left mt-5">
                    <div className="row">

                        <div className="col-md-3 mx-auto mb-4 text-white">
                            <h6 className="text-uppercase font-weight-bold">JI WATCH PORTAL</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "125px; height: 2px" }} />
                            <p className="mt-2">We Have 10 Years Experience in Watch Service.We Provide Best Watch Services.Trust Your Watch to Us, We Provide The Best Warranty and Service!</p>
                        </div>

                        <div className="col-md-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold text-white ">Services</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "85px; height: 2px" }} />

                            <ul className="list-unstyled ">
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Shipping</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Terms and conditions</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Warranty and Authenticity</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-2 mx-auto mb-4 text-white">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "110px; height: 2px" }} />
                            <ul className="list-unstyled ">
                                <li className="my-2 "><Link className="text-decoration-none text-white" to=" ">Home</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">About</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Services</Link></li>
                                <li className="my-2"><Link className="text-decoration-none text-white" to=" ">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mx-auto mb-4 text-white">
                            <h6 className="text-uppercase font-weight-bold">Our Address</h6>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ "width": "75px; height: 2px" }} />
                            <ul className="list-unstyled">
                                <li className="my-2"><i className="fas fa-home mr-3"></i> LA, NY 10012, US</li>
                                <li className="my-2"><i className="fas fa-envelope mr-3"></i> JIWatchPortal@gmail.com</li>
                                <li className="my-2"><i className="fas fa-phone mr-3"></i> + 01 234 567 88</li>
                                <li className="my-2"><i className="fas fa-print mr-3"></i> + 01 234 567 89</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3 text-white">
                    <p>&copy; Copyright
                        <Link className="text-white text-decoration-none" to=" "> JIWatch-Portal.com</Link></p>
                    <p>Stay Connected with our social Networks</p>
                    <div className="col-md-12 text-center">
                        <Link className="text-white mx-2" to=" "><i className="fab fa-facebook-f white-text mx-2"> </i></Link>
                        <Link to=" "><i className="fab fa-twitter text-white mx-2"> </i></Link>
                        <Link to=" "><i className="fab fa-google-plus-g text-white mx-2"> </i></Link>
                        <Link to=" "><i className="fab fa-linkedin-in text-white mx-2"> </i></Link>
                        <Link to=" "><i className="fab fa-instagram text-white mx-2 "> </i></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;