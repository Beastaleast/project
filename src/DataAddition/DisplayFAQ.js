import React from "react";
import "./ShowModal.css";

function DisplayFAQ({ closeFAQ }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Please add FAQ question answer</h1>
          <button className="close-btn" onClick={closeFAQ}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form className="data-addition-form">
            <div className="form-group">
              <label htmlFor="name">Question:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Answer:</label>
              <input type="text" id="name" name="text" />
            </div>
            <button type="button" className="accept-btn" onClick={closeFAQ}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DisplayFAQ;
