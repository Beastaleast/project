import React from "react";
import "./ShowModal.css";

function ShowModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Welcome to the Good Gut Project</h1>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form className="data-addition-form">
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
            <button type="button" className="accept-btn" onClick={closeModal}>
              Accept It
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
