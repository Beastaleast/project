import React from "react";
import Button from "./Button";

export default function ClientTable() {
  const fdata = {
    Food_Name: "Boiled Egg",
    Quantity: "1",
    Unit: "Piece",
    Calorie_Unit: "50",
    Carbohydrates: "30",
    Protein: "7",
    Fibre: "1",
    Fats:"5"
  };

  return (
    <div className="table-container">
      <Button />
      <div>
      <div className="fooditem">
        <div className="heading" style={{ align:"left" ,padding: "8px", width: "1000px" }}>Food Item Addition</div>
        <div className="search-bar">
      <input
        type="text"
        // onChange={}
        placeholder="Search Food Item"
        style={{ padding: "8px", width: "720px" }}
      />
      <button  style={{ padding: "8px", marginLeft: "5px" }}>
        Search
      </button>
      <table className="client-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Calorie/Unit</th>
            <th>Carbohydrates</th>
            <th>Protein</th>
            <th>Fats</th>
            <th>Fibre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fdata.Food_Name}</td>
            <td>{fdata.Quantity}</td>
            <td>{fdata.Unit}</td>
            <td>{fdata.Calorie_Unit}</td>
            <td>{fdata.Carbohydrates}</td>
            <td>{fdata.Protein}</td>
            <td>{fdata.Fats}</td>
            <td>{fdata.Fibre}</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
      
      </div>
      
    </div>
  );
}
