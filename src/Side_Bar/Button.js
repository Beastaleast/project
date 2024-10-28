import React from "react";

export default function Button() {
  return (
    <div className="Home_Menu">
      <div className="Menu_Group">
        <div className="card">
          <a href="/">
            <li>Home</li>
          </a>
        </div>
        <div className="card">
          <a href="/Nutrition">
            <li>Nutritionist Dashbaord</li>
          </a>
        </div>
        <div className="card">
          <a href="/Client_Dashboard">
            <li>Client Dashboard</li>
          </a>
        </div>
        <div className="card">
          <a href="/Food_Item_Addition">
            <li>Food Item Addition</li>
          </a>
        </div>
        <div className="card">
          <a href="/Diet Template Addition">
            <li>Diet Template Addition</li>
          </a>
        </div>
        <div className="card">
          <a href="/E-Commerce">
            <li>E-Commerce</li>
          </a>
        </div>
        <div className="card">
          <a href="/Appointments">
            <li>Appointments</li>
          </a>
        </div>
        <div className="card">
          <a href="/Reports">
            <li>Reports</li>
          </a>
        </div>
        <div className="card">
          <a href="/Login">
            <li>Login</li>
          </a>
        </div>
        <div className="card">
          <a href="/SignUp">
            <li>SignUp</li>
          </a>
        </div>
      </div>
    </div>
  );
}
