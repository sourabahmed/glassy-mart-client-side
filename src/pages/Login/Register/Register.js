import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const {registerUser } = useAuth();

    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert('passwords does not matched')
        }
        registerUser(data.name, data.email, data.password, history)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="m-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" {...register("name")} />
                    </label>
                    <br />
                    <label className="my-2">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" {...register("email")} />
                    </label>
                    <br />
                    <label className="my-2">
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" {...register("password")} />
                    </label>
                    <br />
                    <label className="my-2">
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Re-enter-password" {...register("password2")} />
                    </label>
                    <br />
                    <input className="my-2 btn btn-danger" type="submit" value="Register" />
                    <br />
                    <Link className="my-2 text-decoration-none" to='/login'>Already Registered? <br /> Please Login.</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;