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
                console.log(data);
                
            })
    }
    return (
        <div>
            <h2>This is Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.displayName} {...register("name")} /> <br />
                <input {...register("description")} placeholder="Write a description"/> <br />
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating"/> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;