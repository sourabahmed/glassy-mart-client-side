import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { productName, url, price , _id} = service;
    return (
        <div className="service">
            <div>
                <img className="img-fluid" src={url} alt="" />
            </div>
            <div className="p-3">
                <h6>{productName}</h6>
                {/* <p><small>{description.slice(0, 90)}</small></p> */}
                <div className="d-flex justify-content-between align-items-center">
                    <h4>৳{price}</h4>
                    <Link to={`/purchase/${_id}`}><button className="btn btn-danger">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;