import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageOrders = () => {
    
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://protected-plateau-17265.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[isDeleted])

const handleDeleteOrder = id => {
    fetch(`https://protected-plateau-17265.herokuapp.com/deleteOrder/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsDeleted(true);
        })
        
}
    return (
        <div className="m-2">
            <h2>This is my orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id}>
                                <td>{order.index}</td>
                                <td>{order.name}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.email}</td>
                                <div><button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button></div>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;