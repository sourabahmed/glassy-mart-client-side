import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset(onSubmit);
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