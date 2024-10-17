import React from 'react';
import './Login1.css'; // Import the corresponding CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to the Good Gut Project</h1>
      </div>
      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="login-btn">Log In</button>
      </div>
    </div>
  );
}

export default Login;
