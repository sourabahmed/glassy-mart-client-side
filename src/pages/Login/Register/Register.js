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
            <section className="vh-100 my-5 my-lg-1">
                <div className="container  h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <h3>Please Register</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-outline mb-2">
                                    <input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Full Name" {...register("name")} required/>
                                    <label className="form-label" htmlFor="form1Example13">Full Name</label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Email" {...register("email")} required/>
                                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                                </div>


                                <div className="form-outline mb-2">
                                    <input type="password" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Password" {...register("password")} required/>
                                    <label className="form-label" htmlFor="form1Example23">Password</label>
                                </div>

                                <div className="form-outline mb-2">
                                    <input type="password" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Re-Enter-Password" {...register("password2")} required/>
                                    <label className="form-label" htmlFor="form1Example23">Re-Enter-Password</label>
                                </div>

                                <input type="submit" className="btn btn-primary btn-block" value="register" />

                                <div className="d-flex justify-content-around align-items-center mb-1">
                                    <Link to="/login"><button type="button" className="btn btn-link fs-5">Already Register? Login.</button></Link>
                                </div>

                                <div>
                                <span className="mx-3 fw-bold">OR</span>
                                    <button className="btn btn-primary"> <i className="fab fa-google"></i> Sign in With Google</button>
                                </div>

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

export default Register;