import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="products">
                {
                    services?.map(service => <Product
                        service={service}
                        key={service._id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;