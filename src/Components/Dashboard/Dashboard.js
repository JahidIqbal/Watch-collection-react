import React from 'react';
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <div className='bg-dark'>
            <div className="row">
                <div className="col-md-2 col-sm-4 sidebar1">

                    <br />
                    <div className="left-navigation">
                        <ul className="list">
                            {
                                !admin &&
                                <li>
                                    <h2>DashBoard</h2>

                                    {/* <button className=" btn-light rounded-pill border-0 mt-2 w-50">
                                        <Link to={`${url}/payment`} className="nav-link text-black">Payment</Link>
                                    </button> */}

                                    <br />
                                    <button className=" btn-light rounded-pill border-0 mt-2 w-50">
                                        <Link to={`${url}/seeorder`} className="nav-link text-black">my orders</Link></button>

                                    <br />
                                    <button className=" btn-light rounded-pill border-0 mt-2 w-50">
                                        <Link to={`${url}/review`} className="nav-link text-black">Review</Link>
                                    </button>
                                </li>
                            }





                        </ul>

                        <ul className="list">
                            {
                                admin &&
                                <li>
                                    <h2>DashBoard</h2>
                                    <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/makeadmin`} className="nav-link text-black text-nowrap text-center">Make Admin</Link>
                                    </button>

                                    <br />

                                    <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/addaproduct`} className="nav-link text-black text-nowrap text-center">Add a Product</Link>
                                    </button>

                                    <br />

                                    <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/manageallorders`} className="nav-link text-black text-nowrap text-center">Manage All orders</Link>
                                    </button>
                                    <br />

                                    <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/manageproducts`} className="nav-link text-black text-nowrap ">Manage Products</Link>
                                    </button>


                                </li>

                            }

                        </ul>


                    </div>
                </div>

                <div className="col-md-10 col-sm-8 main-content">
                    <Switch>
                        <Route exact path={`${path}/`}>
                            <DashboardHome />
                        </Route>

                        <Route path={`${path}/seeorder`}>
                            <MyOrders></MyOrders>
                        </Route>

                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        {/* <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route> */}

                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                        <AdminRoute path={`${path}/addaproduct`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                    </Switch>

                </div>
            </div>

        </div >
    );
};

export default Dashboard;