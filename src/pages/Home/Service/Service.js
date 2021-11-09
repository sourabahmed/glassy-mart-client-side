import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { productName, url, price , description} = service;
    return (
        <div className="service">
            <div>
                <img className="img-fluid" src={url} alt="" />
            </div>
            <div className="p-3">
                <h5>{productName}</h5>
                <h4>{price}</h4>
                <button className="btn btn-danger">Purchase</button>
            </div>
        </div>
    );
};

export default Service;