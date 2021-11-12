import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://protected-plateau-17265.herokuapp.com/services', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Product added')
            }
            reset(handleSubmit);
        })
    }
    return (
        <div className="m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product Name" {...register("productName")} />
                </label>
                <br/>
                <label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Price" {...register("price")} />
                </label>
                <br/>
                <label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Image Url" {...register("url")} />
                </label>
                <br/>
                <label>
                    <textarea type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product Desription" {...register("description")} />
                </label>
                <br/>
                <input className="btn btn-danger" type="submit" value="Add Product" />
                <br />
                <Link className="text-decoration-none" to='/login'>Already Registered? Please Login.</Link>
            </form>
        </div>
    );
};

export default AddProduct;