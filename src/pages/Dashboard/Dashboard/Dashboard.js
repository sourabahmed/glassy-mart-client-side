import React from 'react';
import DashBordNavigation from '../DashbordNavigation/DashBordNavigation';
import useAuth from '../../../hooks/useAuth'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const { user, admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="row ">
            <DashBordNavigation></DashBordNavigation>

            <div className="col-sm-12 col-lg-3 bg-light p-5 ">
                <h4>{user.displayName}</h4>
                <h6>{user.email}</h6>
                <button onClick={logOut} className="btn btn-danger mb-4">Logout</button> <br />
                <Link className="text-decoration-none text-dark" to={`${url}/payment`}>Paymant</Link><br />
                <Link className="text-decoration-none text-dark" to={`${url}/addReview`}>AddReview</Link><br />
                <Link className="text-decoration-none text-dark" to={`${url}/myOrders`}>My Orders</Link> <br />
                {admin &&
                    <div>
                        <Link className="text-decoration-none text-dark" to={`${url}/addProduct`}>AddProdcut</Link> <br />
                        <Link className="text-decoration-none text-dark" to={`${url}/makeAdmin`}>MakeAdmin</Link> <br />
                        <Link className="text-decoration-none text-dark" to={`${url}/manageOrders`}>ManageOrders</Link>
                    </div>}
            </div>

            <div className="col-sm-12 col-lg-9">
                <Switch>
                    <Route exact path={path}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>

                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;