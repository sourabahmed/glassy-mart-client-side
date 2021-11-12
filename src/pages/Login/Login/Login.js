import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { logInUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        logInUser(data.email, data.password, location, history)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="m-5 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" {...register("email")} />
                    </label>
                    <br />
                    <label className="m-3">
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" {...register("password")} />
                    </label>
                    <br />
                    <input className="btn btn-danger" type="submit" value="Login" />
                    <br />
                    <Link className="text-decoration-none " to='/register'>New User? Please Register.</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;