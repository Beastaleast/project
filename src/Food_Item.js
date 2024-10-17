import React from "react";
import Button from "./Button";

export default function ClientTable() {
  const fdata = {
    Food_Name: "Udit Kushwaha",
    ReferredBy: "Harshit Shakya",
    Target_Goal: "Weight Gain",
    NoOfMonths: "3",
    Dietician: "Bharat Awasthi",
  };

  return (
    <div className="table-container">
      <Button />
      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Referred by</th>
            <th>Target Goal</th>
            <th>No of Months</th>
            <th>Dietician</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fdata.Food_Name}</td>
            <td>{fdata.ReferredBy}</td>
            <td>{fdata.Target_Goal}</td>
            <td>{fdata.NoOfMonths}</td>
            <td>{fdata.Dietician}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
