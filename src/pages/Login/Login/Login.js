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
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h3>Please Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Email" {...register("email")} required/>
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                </div>


                                <div className="form-outline mb-2">
                                    <input type="password" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Password" {...register("password")} required/>
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block" value="Login" />

                                <div className="d-flex justify-content-around align-items-center mb-2">
                                    <Link to="/register"><button type="button" className="btn btn-link fs-5">Register</button></Link>
                                </div>

                                <div className="divider d-flex align-items-center my-2">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <button className="btn btn-lg btn-primary"> <i className="fab fa-google"></i> Sign in With Google</button>
                            </form>
                        </div>
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://i.ibb.co/hMPyztP/4957136.jpg" className="img-fluid" alt="login" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;