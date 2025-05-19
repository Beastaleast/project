import React, { useState, useEffect } from "react";
import "./Cle.css";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../Common/loader";
import Auth from "../../Common/auth";

function Cleints_Dashboard() {
  const API = process.env.REACT_APP_GGP_API_URL;
  const [initialClients, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const deleteClient = (id) => {
    axios
      .delete(API + "/users/" + id, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(function () {
        getData();
        alert("Deleted successfully");
      });
  };

  const getData = () => {
    setIsLoading(true);
    axios
      .get(API + "/users", {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(function (response) {
        setData(response.data.Users);
        setClients(response.data.Users); // keep state in sync
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
      <Auth />

      {/* Updated Header and Search Bar */}
      <div className="header_container">
        <h1 className="page_title">Client List</h1>
        <input
          type="text"
          className="search_input"
          placeholder="Search clients by name, phone, email..."
          value={searchTerm}
          onChange={handleSearch}
        />
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
            {filteredClients.map((client) => (
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
    </div>
  );
}

export default Cleints_Dashboard;
