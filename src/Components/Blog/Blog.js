import React from 'react';
import './Blog.css'
import blog1 from '../../images/tan.jpg'
import blog2 from '../../images/blog 2.jpg'
import blog3 from '../../images/he.jpg'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div className="mt-4">
            <section id="blog">
                <div className="row">
                    <div className=" text-center">
                        <h1 className=" fw-bolder display-3 w-100 "> Latest Blog Posts </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-aos="zoom-in" >
                        <div className="blog column text-center ">
                            <img src={blog1} alt="" width="100%" />
                            <h4 className="text">5 Preparations You Should Make Before Using Watch</h4>
                            <p className="font-italic">Watches are highly desirable fashion accessories and utilities and are treated as essential wardrobe items as well.</p>
                            <Link className="text-decoration-none text-dark   fw-bolder" to="/">Read More <i className="fab fa-readme"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-aos="zoom-in">
                        <div className="blog column text-center m">
                            <img src={blog2} alt="" width="100%" />
                            <h4 className="">Five Great Lessons You Can Learn From Watch</h4>
                            <p className="font-italic">Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
                            <Link className="text-decoration-none text-dark fw-bolder" to="/">Read More <i className="fab fa-readme"></i></Link>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" data-aos="zoom-in">
                        <div className="blog column text-center">
                            <img src={blog3} alt="" width="100%" />
                            <h4 className="text">7 Questions About Watch You Should Answer Truthfully</h4>
                            <p className=" font-italic">Our judgments, like our watches, none go just alike, yet each believes his own.</p>
                            <Link className="text-decoration-none text-dark  fw-bolder" to="/">Read More <i className="fab fa-readme"></i></Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Blog;