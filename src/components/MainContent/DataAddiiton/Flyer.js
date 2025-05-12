import React, { useState, useEffect } from "react";
import "./Flyer.css";
import ShowModal from "./ShowModal";
import DisplayFAQ from "./DisplayFAQ";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../Common/loader";
import Auth from "../../Common/auth";

const Flyer = () => {
  const API = process.env.REACT_APP_GGP_API_URL;

  const [flyer, setFlyer] = useState(false);
  const [FAQ, setFAQ] = useState(false);
  const [flyerdata, setFlyerdata] = useState([]);
  const [FAQdata, setFAQdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editFlyerData, setEditFlyerData] = useState(null);
  const [editFAQData, setEditFAQData] = useState(null);

  useEffect(() => {
    flyerList();
    FAQList();
  }, []);

  const flyerList = async () => {
    try {
      const response = await axios.get(API + "/flyer", {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setFlyerdata(response.data);
    } catch (error) {
      console.error("Error fetching flyer data:", error);
    }
  };

  const FAQList = async () => {
    try {
      const response = await axios.get(API + "/faq", {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setFAQdata(response.data);
    } catch (error) {
      console.error("Error fetching faq data:", error);
    }
  };

  const deleteFlyer = (id) => {
    setIsLoading(true);
    axios
      .delete(`${API + "/flyer"}/${id}`, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(() => {
        window.alert("Flyer deleted!");
        flyerList();
        setIsLoading(false);
      })
      .catch((error) => {
        window.alert("Error deleting flyer", error);
        setIsLoading(false);
      });
  };

  const deleteFAQ = (id) => {
    setIsLoading(true);
    axios
      .delete(`${API + "/faq"}/${id}`, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then(() => {
        window.alert("FAQ deleted!");
        FAQList();
        setIsLoading(false);
      })
      .catch((error) => {
        window.alert("Error deleting FAQ", error);
        setIsLoading(false);
      });
  };

  const handleEditFlyer = (flyer) => {
    setEditFlyerData(flyer); 
    setFlyer(true); 
  };

  const handleEditFAQ = (faq) => {
    setEditFAQData(faq); 
    setFAQ(true); 
  };

  return (
    <div className="DataAdd">
      <Auth />
      <Loader isLoading={isLoading} />
      {/* Flyer Section */}
      <div>
        <div className="sidebar-align">
          <button className="DataAddition-btn" onClick={() => setFlyer(true)}>
            ADD Flyer
          </button>
          {flyer && (
            <ShowModal
              closeFlyer={() => setFlyer(false)}
              flyerdata={flyerdata}
              editData={editFlyerData}
            />
          )}
        </div>

        <div className="scrollable-box flyer-container">
          {flyerdata.length > 0 ? (
            flyerdata.map((item, index) => (
              <div className="flyer-item" key={index}>
                <img src={item.imageUrl} alt={`Flyer ${index}`} />
                <div>
                  <p>{item.name}</p>
                </div>
                <button onClick={() => handleEditFlyer(item)}>
                  <EditIcon className="editicon" />
                </button>
                <button onClick={() => deleteFlyer(item._id)}>
                  <DeleteIcon className="deleteicon" color="error" />
                </button>
              </div>
            ))
          ) : (
            <div>Loading flyer data...</div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <div className="right-align">
          <button className="DataAddition-btn" onClick={() => setFAQ(true)}>
            ADD FAQ
          </button>
          {FAQ && (
            <DisplayFAQ
              closeFAQ={() => setFAQ(false)}
              FAQList={FAQList}
              editData={editFAQData}
            />
          )}
        </div>

        <div className="scrollable-box faq-container">
          {FAQdata.length > 0 ? (
            FAQdata.map((item, index) => (
              <div className="FAQ-item" key={index}>
                <div>
                  <strong>Question:</strong> {item.question}
                </div>
                <div>
                  <strong>Answer:</strong> {item.answer}
                </div>
                <button onClick={() => handleEditFAQ(item)}>
                  <EditIcon className="editicon" />
                </button>
                <button onClick={() => deleteFAQ(item._id)}>
                  <DeleteIcon className="deleteicon" color="error" />
                </button>
              </div>
            ))
          ) : (
            <div>Loading FAQ data...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flyer;
