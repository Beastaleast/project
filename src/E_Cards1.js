import React from "react";
import Button from "./Button";


function E_Cards1(props) {
  console.log(props);
  return (
    <div className="container">
    <Button/>
      <div className="u">
        <img src={props.img} alt="" />
        <h2>Text</h2>
        <p>$0</p>
        <p>Body text.</p>
      </div>
      

    </div>
  );
}

export default E_Cards1;
