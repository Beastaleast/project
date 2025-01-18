import React from "react";
import { Link } from "react-router-dom";
import "./Login1.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to the Good Gut Project</h1>
        <p>Your personalized health and nutrition companion</p>
      </div>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="login-btn">Log In</button>
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
