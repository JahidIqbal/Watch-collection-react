import React from 'react';
import './Blog.css'
import blog1 from '../../images/tan.jpg'
import blog2 from '../../images/blog 2.jpg'
import blog3 from '../../images/he.jpg'
import { Link } from 'react-router-dom';
const Blog = () => {
    return (
        <div classNameName="mt-4">



            <section className="blog" data-scroll-index="4">
                <div className="container">

                    <div className="blog-head text-center">
                        <h2>Blog</h2>
                        <h6>latest Posts</h6>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="img">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="info">

                                    <Link className='text-decoration-none text-dark' to=""><h5> Preparations Before buying Watch</h5></Link>
                                    <p>Watches are highly desirable fashion accessories and utilities.Preparation is needed must.</p>
                                    <Link to="" className="user"><i className="fab fa-readme"></i>Read more</Link>
                                    <Link to="" className="more"><i className="fas fa-long-arrow-alt-right"></i></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="img">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="info">

                                    <Link className='text-decoration-none text-dark' to=""><h5>Great Lessons Learn From Watch</h5></Link>
                                    <p>Everyone looks at your watch and it represents who you are, your values and your personal style.</p>
                                    <Link to="" className="user"><i className="fab fa-readme"></i>Read more</Link>
                                    <Link to="" className="more"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <div className="img">
                                    <img src={blog3} alt="" />
                                </div>
                                <div className="info">

                                    <Link className='text-decoration-none text-dark' to=""><h5>Questions About buying Watch</h5></Link>
                                    <p>Our judgments, like our watches, none go just alike, yet each believes his own.</p>
                                    <Link to="" className="user"><i className="fab fa-readme"></i>Read more</Link>
                                    <Link to="" className="more"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;