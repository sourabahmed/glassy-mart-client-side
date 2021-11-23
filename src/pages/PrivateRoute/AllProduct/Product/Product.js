import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ service }) => {
    const { productName, url, price , _id} = service;
    return (
        <div className="product">
            <div>
                <img className="img-fluid" src={url} alt="" />
            </div>
            <div className="p-3">
                <p>{productName}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>৳{price}</h4>
                    <Link to={`/purchase/${_id}`}><button className="btn btn-danger">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;