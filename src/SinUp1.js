import React from "react";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Welcome to the Good Gut Project</h1>
      </div>
      <div className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="signup-btn">Sign UP</button>
      </div>
    </div>
  );
}

export default Signup;
