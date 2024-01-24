import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/login.css';
import authLayout from "../../hoc/authLayout";


const RegisterPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log("Registration form submitted");
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">sign in?</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default authLayout(RegisterPage);
