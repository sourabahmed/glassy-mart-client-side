import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))

    return (
        <div className="m-2">
            <h2>This is my orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.filter(data => data?.email === user?.email).map(order =>
                            <tr>
                                <td key={order._id}>{order.index}</td>
                                <td   >{order.name}</td>
                                <td  >{order.productName}</td>
                                <td  >{order.price}</td>
                                <td  >{order.email}</td>
                                <div><button className="btn btn-danger">Delete</button></div>
                            </tr>
                        )
                    }

                    {/* <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;