import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://protected-plateau-17265.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="mt-5">Products</h2>
            <div className="services">
                {
                    services?.slice(0, 6).map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;