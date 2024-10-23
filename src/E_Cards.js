import React from "react";

import E_Cards1 from "./E_Cards1";
import "./E_Cards1.css";
import img from "./images/56786.jpg";
import img1 from "./images/Yourganik PNG Logo(1).jpg";
import img2 from "./images//56786.jpg";


function E_Cards() {
  return (
    <div>
     
      <div className="comp">
      <E_Cards1 img={img}/>
      <E_Cards1 img={img1}/>
      <E_Cards1 img={img2}/>
      <E_Cards1 img={img2}/>
      </div>
     
    </div>
  );
}

export default E_Cards;
