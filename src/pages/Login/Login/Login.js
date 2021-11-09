import React from 'react';
import { useForm } from "react-hook-form";
import { Link , useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {logInUser} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        logInUser(data.email, data.password, location, history)
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
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;