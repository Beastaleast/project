import React, { useState, useEffect } from "react";
import "./Cle.css";
import axios from "axios";

// const initialClients = [
//   {
//     id: 1,
//     name: "Mr. Ankit Shakya",
//     phone: "+91-6387780207",
//     email: "shakya738@gmail.com",
//     nutritionist: "Azra Khan",
//     tags: "----",
//     service: "Comprehensive Weight Loss Plan",
//     planStart: "Aug 6, 2024",
//     planEnd: "Feb 2, 2025",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Mr. Despendra Shakya",
//     phone: "+91-9791821922",
//     email: "shakyaNeha548@gmail.com",
//     nutritionist: "Neha Shakya",
//     tags: "----",
//     service: "Ultimate Weight Loss Plan",
//     planStart: "Jul 2, 2024",
//     planEnd: "Sep 30, 2024",
//     status: "Active",
//   },
//   {
//     id: 3,
//     name: "Mr. Despendra Shakya",
//     phone: "+91-9791821922",
//     email: "shakyaNeha548@gmail.com",
//     nutritionist: "Neha Shakya",
//     tags: "----",
//     service: "Ultimate Weight Loss Plan",
//     planStart: "Jul 2, 2024",
//     planEnd: "Sep 30, 2024",
//     status: "Active",
//   },
//   {
//     id: 5,
//     name: "Mr. Despendra Shakya",
//     phone: "+91-9791821922",
//     email: "shakyaNeha548@gmail.com",
//     nutritionist: "Neha Shakya",
//     tags: "----",
//     service: "Ultimate Weight Loss Plan",
//     planStart: "Jul 2, 2024",
//     planEnd: "Sep 30, 2024",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Mr. Despendra Shakya",
//     phone: "+91-9791821922",
//     email: "shakyaNeha548@gmail.com",
//     nutritionist: "Neha Shakya",
//     tags: "----",
//     service: "Ultimate Weight Loss Plan",
//     planStart: "Jul 2, 2024",
//     planEnd: "Sep 30, 2024",
//     status: "Active",
//   },
// ];

function ClientManagement() {
  const API = "https://my-api-six-steel.vercel.app/getsales";

  const APIDelete ="https://my-api-six-xi.vercel.app/api/delete/";

  const [initialClients, setData] = useState([]);

  // const res = await axios.get(API)
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(initialClients);
  }, [initialClients]);

  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState("");

  const deleteClient = (id) => {
    //setClients(clients.filter((client) => client.id !== id));
//console.log(id);
    const res = axios
      .delete(APIDelete + id,{
        headers: {
          "x-api-key": "ggp-pro-ject",
        }   
      })
      .then(function (response) {
        getData();
        alert("Deleted successfully");
      });
  };

const getData =()=>
{
  const res = axios
  .get(API, {
    headers: {
      "x-api-key": "ggp-pro-ject",
    },
  })
  .then(function (response) {
    setData(response.data);
  });
}

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
      <div className="list_header">
        <h1>Client List</h1>
      </div>

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
                  <button onClick={() => assignNutritionist(client.id)}>
                    Assign Nutritionist
                  </button>
                  <button onClick={() => deleteClient(client._id)}>
                    Delete Client
                  </button>
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

export default ClientManagement;
