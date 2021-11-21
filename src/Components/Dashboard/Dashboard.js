import React from 'react';
import './Dashboard.css'
import brandicon from '../../images/watch.png'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    return (
        <div>
            <div className="row">
                <div className="col-md-2 col-sm-4 sidebar1">
                    <div className="logo">
                        <img src={brandicon} alt="" width="50" />
                    </div>
                    <br />
                    <div className="left-navigation">
                        <ul className="list">
                            {
                                !admin &&
                                <li>
                                    <h2>DashBoard</h2>

                                    <Link to={`${url}/payment`} className="nav-link text-white">Payment</Link>

                                    <Link to={`${url}/seeorder`} className="nav-link text-white">my orders</Link>

                                    <Link to={`${url}/review`} className="nav-link text-white">Review</Link>
                                </li>
                            }





                        </ul>

                        <ul className="list">
                            {
                                admin &&
                                <li>
                                    <h2>DashBoard</h2>

                                    <Link to={`${url}/makeadmin`} className="nav-link text-white">Make Admin</Link>

                                    <Link to={`${url}/addaproduct`} className="nav-link text-white">Add a Product</Link>

                                    <Link to={`${url}/manageallorders`} className="nav-link text-white">Manage All orders</Link>

                                    <Link to={`${url}/manageproducts`} className="nav-link text-white">Manage Products</Link>

                                    <Link to="" className="nav-link text-white">
                                        <button className="btn btn-light" onClick={logOut}> Logout</button> </Link>
                                </li>

                            }

                        </ul>


                    </div>
                </div>
                <div className="col-md-10 col-sm-8 main-content">

                    <Switch>

                        <Route path={`${path}/seeorder`}>
                            <MyOrders></MyOrders>
                        </Route>

                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>

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