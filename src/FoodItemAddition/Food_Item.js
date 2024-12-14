import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Food_Item.css";

const ClientManagement = () => {
  const API = "https://my-api-six-steel.vercel.app/api/fooditems/";
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await axios.get(API, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete client and sync with API
  const deleteClient = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`${API}`, {
          headers: {
            "x-api-key": "ggp-pro-ject",
          },
        });
        setClients((prev) => prev.filter((client) => client.id !== id));
      } catch (error) {
        console.error("Error deleting client: ", error);
      }
    }
  };

  // Open edit modal
  const openEditModal = (client) => {
    setCurrentClient({ ...client }); // Clone the client object for safe mutation
    setEditModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setEditModalOpen(false);
    setCurrentClient(null);
  };

  // Save edited client details
  const saveChanges = async () => {
    try {
      await axios.put(`${API}`, currentClient, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setClients((prev) =>
        prev.map((client) =>
          client.id === currentClient.id ? currentClient : client
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error saving changes: ", error);
    }
  };

  // Handle input changes in modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentClient((prev) => ({ ...prev, [name]: value }));
  };

  // Filter clients
  const filteredClients = clients.filter((client) => {
    const term = searchTerm.toLowerCase();
    return (
      client.name?.toLowerCase().includes(term) ||
      client.food_type?.toLowerCase().includes(term) ||
      client.meal_type?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="client-management">
      <div className="list_header">
        <h1>Food Items</h1>
      </div>

      <div className="search_bar">
        <input
          type="text"
          placeholder="Search by name, food type, or meal type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="list_container">
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Quantity</th>
              <th>Kilo Calorie</th>
              <th>p</th>
              <th>c</th>
              <th>f</th>
              <th>Image Url</th>
              <th>Food Type</th>
              <th>Meal Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.quantity}</td>
                <td>{client.kilo_calorie}</td>
                <td>{client.p}</td>
                <td>{client.c}</td>
                <td>{client.f}</td>
                <td>
                  <a href={client.image_url} target="_blank" rel="noopener noreferrer">
                    View Image
                  </a>
                </td>
                <td>{client.food_type}</td>
                <td>{client.meal_type}</td>
                <td>
                  <EditIcon
                    className="edit-icon"
                    onClick={() => openEditModal(client)}
                  />
                  <DeleteIcon
                    className="delete-icon"
                    onClick={() => deleteClient(client.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Edit Client Details</h2>
            <div className="modal-form">
              <div className="scrollable">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={currentClient.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Quantity:
                  <input
                    type="text"
                    name="quantity"
                    value={currentClient.quantity}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Kilo Calorie:
                  <input
                    type="text"
                    name="kilo_calorie"
                    value={currentClient.kilo_calorie}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Protein (p):
                  <input
                    type="text"
                    name="p"
                    value={currentClient.p}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Carbs (c):
                  <input
                    type="text"
                    name="c"
                    value={currentClient.c}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Fat (f):
                  <input
                    type="text"
                    name="f"
                    value={currentClient.f}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Food Type:
                  <input
                    type="text"
                    name="food_type"
                    value={currentClient.food_type}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Meal Type:
                  <input
                    type="text"
                    name="meal_type"
                    value={currentClient.meal_type}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div className="modal-actions">
              <button className="save-btn" onClick={saveChanges}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientManagement;
