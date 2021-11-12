import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Purchase.css'
import useAuth from '../../hooks/useAuth';

const Purchase = () => {
    const {user} = useAuth();
    const { purchaseId } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch(`https://protected-plateau-17265.herokuapp.com/singleService/${purchaseId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

   
    const onSubmit = data => {
        fetch('https://protected-plateau-17265.herokuapp.com/orders', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('order done')
            }
        })
    }


    return (
        <div>
            <Navigation></Navigation>
            <h2>This is Purchase {service.productName}</h2>

            <div  className="purchase">
                <div>
                    <div className="details">
                        <div className="img">
                            <img className="img-fluid" src={service?.url} alt="" />
                        </div>
                        <div className="p-3">
                            <h5>{service?.productName}</h5>
                            <p><small>{service?.description}</small></p>
                            <h4>{service?.price}</h4>
                            <Link to="/home"><button className="btn btn-danger">Go Back</button></Link>
                        </div>
                    </div>
                </div>

                <div className="order">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user?.displayName} {...register("name")} /> <br />
                        <input defaultValue={user?.email}  {...register("email")} /> <br />
                        <input defaultValue={service?.productName}  {...register("productName")} /> <br />
                        <input defaultValue={service?.price}  {...register("price")} /> <br />
                        <input {...register("phone")} placeholder="your phone number"/> <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;