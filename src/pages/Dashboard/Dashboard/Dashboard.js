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

const Dashboard = () => {
    const {user} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="row ">
            <DashBordNavigation></DashBordNavigation>

            <div className="col-3 bg-danger py-5">
                <h4>{user.displayName}</h4>
                <h6>{user.email}</h6>
                <Link to={`${url}/payment`}>Paymant</Link><br />
                <Link to={`${url}/myOrders`}>My Orders</Link>
            </div>

            <div className="col-9">
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

                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;