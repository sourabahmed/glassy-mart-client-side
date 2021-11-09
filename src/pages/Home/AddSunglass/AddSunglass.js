import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';


const AddSunglass = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            reset(handleSubmit);
        })
    }
    return (
        <div>
            <Navigation></Navigation>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Glass Name: <br />
                    <input type="text" {...register("productName")} />
                </label>
                <br/>
                <label>
                    Price: <br />
                    <input type="text" {...register("price")} />
                </label>
                <br/>
                <label>
                    Img-url: <br/>
                    <input type="text" {...register("url")} />
                </label>
                <br/>
                <label>
                    Description: <br/>
                    <input type="text" {...register("description")} />
                </label>
                <br/>
                <Link to='/login'>Already Registered? Please Login.</Link>
                <br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddSunglass;