import React, { useState, useEffect } from "react";
import "./ShowModal.css";
import axios from "axios";

function DisplayFAQ({ closeFAQ, FAQList }) {
  const APIF = "https://my-api-six-steel.vercel.app/api/faq";
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const postfaq = async () => {
    try {
      const response = await axios
        .post(
          APIF,
          { ques: question, ans: answer },
          {
            headers: {
              "x-api-key": "ggp-pro-ject",
            },
          }
        )
        .then(
          alert("fAQ post successfully"), 
          closeFAQ(), 
          FAQList());
    } catch (error) {
      console.error("Error fetching flyer data:", error);
    }
  };

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
              <input
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Answer:</label>
              <input
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                id="name"
                name="text"
              />
            </div>
            <button
              type="button"
              className="accept-btn"
              onClick={() => postfaq()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DisplayFAQ;
