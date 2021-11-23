import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer'
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
            <div  className="purchase row">
                <div className="col-sm-12 col-lg-8">
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

                <div className="order col-sm-12 col-lg-4">
                <h2 className="m-3">Order Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user?.displayName} className="form-control" id="exampleFormControlInput1" {...register("name")} /> <br />
                        <input defaultValue={user?.email} className="form-control" id="exampleFormControlInput1" {...register("email")} /> <br />
                        <input defaultValue={service?.productName} className="form-control" id="exampleFormControlInput1" {...register("productName")} /> <br />
                        <input defaultValue={service?.price} className="form-control" id="exampleFormControlInput1" {...register("price")} /> <br />
                        <input className="form-control" id="exampleFormControlInput1" {...register("phone")} placeholder="your phone number"/> <br />
                        <input className="btn btn-danger" type="submit" />
                    </form>
                </div>
            </div>
           <Footer></Footer> 
        </div>
    );
};

export default Purchase;