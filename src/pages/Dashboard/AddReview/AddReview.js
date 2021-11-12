import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://protected-plateau-17265.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Review added')
                }
                
            })
    }
    return (
        <div>
            <h2>This is Add Review</h2>
            <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} className="form-control" id="exampleFormControlInput1"  {...register("name")} /> <br />
                <input {...register("description")} className="form-control" id="exampleFormControlInput1"  placeholder="Write a description"/> <br />
                <input type="number" className="form-control" id="exampleFormControlInput1" {...register("rating", { min: 1, max: 5 })} placeholder="Rating"/> <br />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;