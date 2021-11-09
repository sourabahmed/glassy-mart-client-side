import React from 'react';
import { useForm } from "react-hook-form";
import { Link , useHistory, useLocation} from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {user, logInUser} = useFirebase();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        logInUser(data.email, data.password, history, location)
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