import React from "react";


export default function ClientTable() {
  const Cdata = {
    Name: "Udit Kushwaha",
    ReferredBy: "Harshit Shakya",
    TargetGoal: "Weight Gain",
    NoOfMonths: "3",
    Dietician: "Bharat Awasthi",
  };

  return (
    <div className="table-container">
     
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
            <td>{Cdata.Name}</td>
            <td>{Cdata.ReferredBy}</td>
            <td>{Cdata.TargetGoal}</td>
            <td>{Cdata.NoOfMonths}</td>
            <td>{Cdata.Dietician}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}