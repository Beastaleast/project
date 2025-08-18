import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Authentication } from "../../../actions/authActions";
import "./Login1.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authenticator.value);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const checkAuthentication = () => {
    if (
      credentials.email === "kanpur@ggp.com" &&
      credentials.password === "kanpurggp"
    ) {
      dispatch(Authentication(true));
      localStorage.setItem("isAuthenticated", "true");
      setMessage("");
      navigate("/home");
    } else {
      dispatch(Authentication(false));
      localStorage.setItem("isAuthenticated", "false");
      setMessage("Login Failed!!!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAuthentication();
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to the Good Gut Project</h1>
        <p>Your personalized health and nutrition companion</p>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
        {message && <h3 className="error-message">{message}</h3>}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
