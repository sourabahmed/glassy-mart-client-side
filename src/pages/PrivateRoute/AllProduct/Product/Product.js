import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ service }) => {
    const { productName, url, price , _id, description} = service;
    return (
        <div className="product">
            <div>
                <img className="img-fluid" src={url} alt="" />
            </div>
            <div className="p-3">
                <h5>{productName}</h5>
                <p><small>{description.slice(0, 120)}</small></p>
                <h4>৳{price}</h4>
                <Link to={`/purchase/${_id}`}><button className="btn btn-danger">Purchase</button></Link>
            </div>
        </div>
    );
};

export default Product;