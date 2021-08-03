import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import '../Component/Style/login.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div className="login-form">
                <div className="login-box">
                    <div className="row">
                        <div className="col-lg-6 first-login-box">
                            <div className="user-icon">
                                <FaUserCircle />
                            </div>
                            <div className="user-ints">
                                <p>Already Registered?
                                    Sign In for quick Checkout.</p>
                                <Link to="/login" className="register-button">Have an Account</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 second-login-box">
                            <h4>Already Registered on indexfing?</h4>
                            <p>It only takes a minute to register with indexfing.

                                .</p>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                                <input type="text" className="form-control" placeholder="Password" />
                                <input type="text" className="form-control" placeholder="Password Again" />
                                <Link className="btn login-btn">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
