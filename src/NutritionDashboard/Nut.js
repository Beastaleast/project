import React from "react";
import "./Nut.css";

export default function ClientTable() {
  const Ndata = {
    Name: "Udit Kushwaha",
    Number_of_Client: "4",
    Specialty: "Weight Gain",
    Experience: "3",
  };

  // Handler for the Approve button
  const handleApprove = () => {
    alert(`Client ${Ndata.Name} Approved!`);
  };

  // Handler for the Reject button
  const handleReject = () => {
    alert(`Client ${Ndata.Name} Approved!`);
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Ndata.Name}</td>
            <td>{Ndata.Number_of_Client}</td>
            <td>{Ndata.Specialty}</td>
            <td>{Ndata.Experience}</td>
            <td>
              <button className="approve" onClick={handleApprove}>
                Approve
              </button>
              <button className="reject" onClick={handleReject}>
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
