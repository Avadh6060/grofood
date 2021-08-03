import React from 'react';
import '../Component/Style/login.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const login = () => {
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
                                <p>First Time</p>
                                <p>Create an account to make future
                                    purchases easier.</p>
                                <Link to="/register" className="register-button">Create Account</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 second-login-box">
                            <h4>Login</h4>
                            <p>It only takes a minute to login with indexfing.</p>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                                <input type="email" className="form-control" placeholder="Password" />
                                <button className="btn login-btn">Login</button>
                                <hr />
                                <Link className="forgot-password text-center">Forgot Password </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login
