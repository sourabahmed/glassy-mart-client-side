import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <Navigation></Navigation>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email: <br />
                    <input type="email" {...register("email")} />
                </label>
                <br/>
                <label>
                    Password: <br/>
                    <input type="password" {...register("password")} />
                </label>
                <br/>
                <Link to='/register'>New User? Please Register.</Link>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Login;