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

const Dashboard = () => {
    const {user} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="row ">
            <DashBordNavigation></DashBordNavigation>

            <div className="col-sm-12 col-lg-3 bg-light ">
                <h4>{user.displayName}</h4>
                <h6>{user.email}</h6>
                <Link to={`${url}/payment`}>Paymant</Link><br />
                <Link to={`${url}/myOrders`}>My Orders</Link> <br />
                <Link to={`${url}/addProduct`}>AddProdcut</Link>
            </div>

            <div className="col-sm-12 col-lg-9">
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
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

                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;