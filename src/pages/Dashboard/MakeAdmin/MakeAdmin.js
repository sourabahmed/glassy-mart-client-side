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
        <div className="m-5">
            <h2> Make an Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className=" form-control" id="exampleFormControlInput1" placeholder="Email" {...register("email")} /> <br />
                <input type="submit" className="btn btn-danger" value="Add" />
            </form>
        </div>
    );
};

export default MakeAdmin;