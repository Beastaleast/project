import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Food_Item.css";
import Loader from "../../Common/loader";

const Food_Main = () => {
  const API = "https://my-api-six-steel.vercel.app/api/fooditems/";
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data from API
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(API, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setClients(response.data);
      setIsLoading(false);
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
        await axios.delete(`${API}${id}`, {
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

  // Open add modal
  const openAddModal = () => {
    setCurrentClient({
      name: "",
      quantity: "",
      kilo_calorie: "",
      p: "",
      c: "",
      f: "",
      image_url: "",
      food_type: "",
      meal_type: "",
    });
    setAddModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setEditModalOpen(false);
    setAddModalOpen(false);
    setCurrentClient(null);
  };

  // Save edited client details
  const saveChanges = async () => {
    try {
      await axios.put(`${API}${currentClient.id}`, currentClient, {
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

  // Add new client
  const addClient = async () => {
    try {
      const response = await axios.post(API, currentClient, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setClients((prev) => [...prev, response.data]);
      closeModal();
    } catch (error) {
      console.error("Error adding new client: ", error);
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

      <Loader isLoading={isLoading} />

      <div className="list_tools">
        <div className="add_item">
          <button onClick={openAddModal}>Add Food Item</button>
        </div>
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search by name, food type, or meal type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
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
                  <a
                    href={client.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Edit Client Details</h2>
            <div className="modal-form">
              <div className="scrollable">
                {/* Form Fields */}
                {Object.keys(currentClient).map((key) =>
                  key !== "id" ? (
                    <label key={key}>
                      {key.replace("_", " ").toUpperCase()}:
                      <input
                        type="text"
                        name={key}
                        value={currentClient[key]}
                        onChange={handleInputChange}
                      />
                    </label>
                  ) : null
                )}
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

      {/* Add Modal */}
      {addModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Add New Food Item</h2>
            <div className="modal-form">
              <div className="scrollable">
                {/* Form Fields */}
                {Object.keys(currentClient).map((key) =>
                  key !== "id" ? (
                    <label key={key}>
                      {key.replace("_", " ").toUpperCase()}:
                      <input
                        type="text"
                        name={key}
                        value={currentClient[key]}
                        onChange={handleInputChange}
                      />
                    </label>
                  ) : null
                )}
              </div>
            </div>
            <div className="modal-actions">
              <button className="save-btn" onClick={addClient}>
                Add Item
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

export default Food_Main;
