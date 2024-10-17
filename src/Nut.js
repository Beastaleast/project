import React from "react";
import Button from "./Button";

export default function ClientTable() {
  const Ndata = {
    Name: "Udit Kushwaha",
    Number_of_Client: "4",
    Specialty: "Weight Gain",
    Experience: "3",
  };

  return (
    <div className="table-container">
      <Button />
      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number_of_Client</th>
            <th>Specialty</th>
            <th>Experience</th>
            <th>Approval Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="elemt">{Ndata.Name}</td>
            <td className="elemt">{Ndata.Number_of_Client}</td>
            <td className="elemt">{Ndata.Specialty}</td>
            <td className="elemt">{Ndata.Experience}</td>
            <td className="elemt">
              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
