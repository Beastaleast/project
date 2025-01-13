import React, { useState, useEffect } from "react";
import "./ShowModal.css";
import axios from "axios";

function ShowModal({ closeFlyer, flyerdata }) {
  const API = "https://ggp-api.onrender.com/api/flyer";
  const [flyerName, setFlyerName] = useState(false);
  const [ImageUrl, setImageUrl] = useState(false);

  const postflyer = async () => {
    try {
      const response = await axios
        .post(
          API,
          { name: flyerName, imageUrl: ImageUrl, link: ImageUrl },
          {
            headers: {
              "x-api-key": "ggp-pro-ject",
            },
          }
        )
        .then(alert("flyer post successfully"), closeFlyer(), flyerdata());
    } catch (error) {
      console.error("Error fetching flyer data:", error);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Welcome to the Good Gut Project</h1>
          <button className="close-btn" onClick={closeFlyer}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form className="data-addition-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                onChange={(e) => setFlyerName(e.target.value)}
                type="text"
                id="name"
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="ImageUrl">Image Url:</label>
              <input
                onChange={(e) => setImageUrl(e.target.value)}
                type="text"
                name="Image Url"
              />
            </div>
            <button
              type="button"
              className="accept-btn"
              onClick={() => postflyer()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowModal;
