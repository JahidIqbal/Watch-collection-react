import React from 'react';
import { Link } from 'react-router-dom';
import './TeamMembers.css';
const TeamMembers = () => {
    return (
        <div>
            <div className=" py-5">
                <div className="row text-center text-white">
                    <div className="col-lg-8 mx-auto">
                        <h2 className=" fw-bolder display-4 w-100 text-dark">Professional Team Members</h2>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="row text-center " data-aos="slide-up">


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">James Taylor</h5><span className="small text-uppercase text-muted">General Manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter text-dark mx-2"> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in text-dark mx-2"> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram text-dark mx-2 "> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Samuel Yam</h5><span className="small text-uppercase text-muted">Associate Manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter text-dark mx-2"> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in text-dark mx-2"> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram text-dark mx-2 "> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" height="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Tom harry</h5><span className="small text-uppercase text-muted">Advising Director</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter text-dark mx-2"> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in text-dark mx-2"> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram text-dark mx-2 "> </i></Link>
                            </ul>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-lg py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Neubi Gal</h5><span className="small text-uppercase text-muted text-center">Product manager</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <Link to="/"><i className="fab fa-twitter text-dark mx-2"> </i></Link>
                                <Link to="/"><i className="fab fa-linkedin-in text-dark mx-2"> </i></Link>
                                <Link to=" /"><i className="fab fa-instagram text-dark mx-2 "> </i></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;