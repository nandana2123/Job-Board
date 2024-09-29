import React, { useState } from 'react';
import Navbar from '../shared/navbar';
import { Link } from 'react-router-dom';
import './Login.css';  // Reusing the same CSS as the login

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center'>
                <div className="container">
                    <div className="heading">Sign Up</div>
                    <form action="" className="form">
                        <input
                            required=""
                            className="input"
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder="Full Name"
                            value={input.fullname}
                            onChange={changeEventHandler}
                        />
                        <input
                            required=""
                            className="input"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            value={input.email}
                            onChange={changeEventHandler}
                        />
                        <input
                            required=""
                            className="input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={input.password}
                            onChange={changeEventHandler}
                        />
                        <input
                            required=""
                            className="input"
                            type="number"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Phone Number"
                            value={input.phoneNumber}
                            onChange={changeEventHandler}
                        />
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    className="cursor-pointer"
                                    onChange={changeEventHandler}
                                />
                                <label htmlFor="recruiter" className='font-bold'>Recruiter</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    className="cursor-pointer"
                                    onChange={changeEventHandler}
                                />
                                <label htmlFor="student" className='font-bold'>Student</label>
                            </div>
                        </div>
                        <span className="forgot-password">
                            <input accept="image/" type="file" className="cursor-pointer" onChange={changeFileHandler} />
                        </span>
                        <input className="login-button" type="submit" value="Sign Up" />
                    </form>
                    <span className="agreement">
                        Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
