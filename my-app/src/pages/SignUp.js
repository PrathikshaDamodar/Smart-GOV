import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignUp.css";


const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post("http://localhost:5000/register", {
                firstName,
                lastName,
                email,
                password,
            });
            navigate("/user/login")
        } catch (error) {
            console.log(error.response?.data?.error || "Something went wrong!");
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2 className="signup-title">Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button onClick={handleSignUp} className="signup-button">Sign Up</button>
                <div className="form-footer">
                    <p>
                        Already have an account? <Link to="/user/login">Log in</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
