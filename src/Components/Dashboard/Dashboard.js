import React from 'react';
import './Dashboard.css'
import brandicon from '../../images/watch.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
// import MyOrders from '../MyOrders/MyOrders';
// import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';

// import ManageProducts from '../ManageProducts/ ManageProducts';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
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
                            {/* 
                            <li>
                                <Link to={`${url}/manageallorders`} className="nav-link text-white">Manage All orders</Link>
                            </li>
                            <li>
                                <Link to={`${url}/addaproduct`} className="nav-link text-white">Add a Product</Link>
                            </li>

                            <li>
                                <Link to={`${url}/makeadmin`} className="nav-link text-white">Make Admin</Link>
                            </li>

                            <li>
                                <Link to={`${url}/manageproducts`} className="nav-link text-white">Manage Products</Link>
                            </li>
                            <li>Logout</li>
                            <li>
                                <Link to={`${url}`} className="nav-link text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link to={`${url}/myorders`} className="nav-link text-white">my orders</Link>
                            </li>



                            <li>Review</li>
                            <li>Payment</li> */}

                            {/* <Link to="/dashboard"> <button>Dashboard</button></Link> */}

                            <Link to={`${url}`}> <button>Dashboard</button></Link>
                            {
                                admin && <div>
                                    <Link to={`${url}/makeadmin`}> <button>Make Admin</button></Link>
                                    <Link to={`${url}/addaproduct`}> <button>Add a Product</button></Link>
                                </div>
                            }

                            <Link to={`${url}/seeorder`}> <button>my orders</button></Link>
                            <Link to={`${url}/review`} className="nav-link text-white">Review</Link>

                        </ul>


                    </div>
                </div>
                <div className="col-md-10 col-sm-8 main-content">
                    {/* <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addaproduct`}>
                            < AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            < MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageproducts`}>
                            < ManageProducts></ManageProducts>
                        </Route>

                    </Switch> */}




                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/seeorder`}>
                            <MyOrders></MyOrders>
                        </Route>

                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>

                        <AdminRoute path={`${path}/addaproduct`}>
                            <AddProducts></AddProducts>
                        </AdminRoute>
                    </Switch>

                </div>
            </div>

        </div >
    );
};

export default Dashboard;