import React, { useState } from "react";
import axios from "axios";
import '../styles/Login.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const responseToken = response.data.token;
      setToken(responseToken); // Optional: You can use the token in state, if needed
      localStorage.setItem("authToken", responseToken);  // Store the token in localStorage

      // Redirect after storing the token
      navigate("/home");
    } catch (error) {
      console.log(error.response ? error.response.data.error : error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}> {/* Use onSubmit instead of onClick */}
        <h2 className="login-title">Login</h2>
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
        <button type="submit" className="login-button">Login</button> {/* Change to type="submit" */}
        <div className="form-footer">
          <p>
            Have to create account? <Link to="/user/signup">Get Started</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
