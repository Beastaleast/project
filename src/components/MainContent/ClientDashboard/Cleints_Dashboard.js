import React, { useState, useEffect } from "react";
import "./Cle.css";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Common/loader";

function Cleints_Dashboard() {
  const API = "https://ggp-api.onrender.com/api/userinfo/";

  const [initialClients, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(initialClients);
  }, [initialClients]);

  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteClient = (id) => {
    const res = axios
      .delete(API + id, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(function (response) {
        getData();
        alert("Deleted successfully");
      });
  };

  const getData = () => {
    setIsLoading(true);
    const res = axios
      .get(API, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      });
  };

  const assignNutritionist = (id) => {
    const updatedClients = clients.map((client) => {
      if (client.id === id) {
        return { ...client, nutritionist: "New Nutritionist" };
      }
      return client;
    });
    setClients(updatedClients);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm) ||
      client.phone.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm) ||
      client.nutritionist.toLowerCase().includes(searchTerm) ||
      client.service.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className="list_headers">
        <h1>Client List</h1>
      </div>
      <Loader isLoading={isLoading} />
      <div className="list_container">
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Nutritionist</th>
              <th>Tags</th>
              <th>Service Plan</th>
              <th>Plan Start</th>
              <th>Plan End</th>
              <th>Status</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialClients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.nutritionist}</td>
                <td>{client.tags}</td>
                <td>{client.service}</td>
                <td>{client.planStart}</td>
                <td>{client.planEnd}</td>
                <td>{client.status}</td>
                <td>{client.gender}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => assignNutritionist(client.id)}>
                      Assign Nutritionist
                    </button>
                    <button onClick={() => deleteClient(client.id)}>
                      <DeleteIcon className="delete-icon" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="search_bar">
        <input
          type="text"
          placeholder="Search clients by name, phone, email..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Cleints_Dashboard;
