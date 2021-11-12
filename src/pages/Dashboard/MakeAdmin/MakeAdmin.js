import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://protected-plateau-17265.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
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
            <h2>This is make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;