import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const {user, registerUser} = useAuth();

    const onSubmit = data => {
        if(data.password !== data.password2){
            alert('passwords does not matched')
        }
        registerUser(data.name, data.email, data.password, history)
    }
    return (
        <div>
            <Navigation></Navigation>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:{user?.name} <br />
                    <input type="text" {...register("name")} />
                </label>
                <br/>
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
                <label>
                    Re-enter-password: <br/>
                    <input type="password" {...register("password2")} />
                </label>
                <br/>
                <Link to='/login'>Already Registered? Please Login.</Link>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;