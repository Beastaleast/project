import React from "react";


export default function ClientTable() {
  const Ndata = {
    Name: "Udit Kushwaha",
    Number_of_Client: "4",
    Specialty: "Weight Gain",
    Experience: "3",
  };

  return (
    <div className="table-container">
    
      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number_of_Client</th>
            <th>Specialty</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Ndata.Name}</td>
            <td>{Ndata.Number_of_Client}</td>
            <td>{Ndata.Specialty}</td>
            <td>{Ndata.Experience}</td>
            <td>
              <button className="approve">Approve</button>
              <button className="reject">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
