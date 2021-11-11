import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { productName, url, price , _id, description} = service;
    return (
        <div className="service">
            <div>
                <img className="img-fluid" src={url} alt="" />
            </div>
            <div className="p-3">
                <h5>{productName}</h5>
                <h4>{price}</h4>
                <Link to={`/purchase/${_id}`}><button className="btn btn-danger">Purchase</button></Link>
            </div>
        </div>
    );
};

export default Service;