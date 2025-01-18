import React, { useState } from "react";
import "./Cards.css";
import Auth from "../../Common/auth";

function Cards() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  return (
    <div className="Home_Cards">
      <Auth/>
      <header className="home_header">
        <div className="header-right">
          <button className="navButton" onClick={() => setShowLoginModal(true)}>
            Login
          </button>
          <button
            className="navButton"
            onClick={() => setShowSignupModal(true)}
          >
            Signup
          </button>
        </div>
        <h1 className="header-title">Welcome to Our Platform</h1>
      </header>

      <main>
        <div className="Card_Group">
          {[...Array(12).keys()].map((index) => (
            <div className="Peoplecard" key={index}>
              <p className="count">
                {index % 2 === 0 ? 11 + index : 13 + index}
              </p>
              <p className="label">
                {index % 2 === 0 ? "Nutritionists" : "Clients"}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Our Platform. All rights reserved.</p>
      </footer>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="loginEmail">Email:</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="modal-btn">
                Log In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="signupEmail">Email:</label>
                <input
                  type="email"
                  id="signupEmail"
                  name="signupEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password:</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="signupPassword"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="modal-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
