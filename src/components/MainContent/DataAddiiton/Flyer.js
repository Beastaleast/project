import React, { useState, useEffect } from "react";
import "./Flyer.css";
import ShowModal from "./ShowModal";
import DisplayFAQ from "./DisplayFAQ";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../Common/loader";
import Auth from "../../Common/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "./IsMobile";

const Flyer = () => {
  const API = process.env.REACT_APP_GGP_API_URL;
  const isMobile = useIsMobile();

  const [flyer, setFlyer] = useState(false);
  const [FAQ, setFAQ] = useState(false);
  const [flyerdata, setFlyerdata] = useState([]);
  const [FAQdata, setFAQdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editFlyerData, setEditFlyerData] = useState(null);
  const [editFAQData, setEditFAQData] = useState(null);
  const [isFlyerOpen, setIsFlyerOpen] = useState(true); // Default to open on desktop
  const [isFAQOpen, setIsFAQOpen] = useState(true);

  useEffect(() => {
    flyerList();
    FAQList();
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsFlyerOpen(false);
      setIsFAQOpen(false);
    } else {
      setIsFlyerOpen(true);
      setIsFAQOpen(true);
    }
  }, [isMobile]);

  const flyerList = async () => {
    try {
      const response = await axios.get(`${API}/flyer`, {
        headers: { "x-api-key": "ggp-pro-ject" },
      });
      setFlyerdata(response.data);
    } catch (error) {
      console.error("Error fetching flyer data:", error);
    }
  };

  const FAQList = async () => {
    try {
      const response = await axios.get(`${API}/faq`, {
        headers: { "x-api-key": "ggp-pro-ject" },
      });
      setFAQdata(response.data);
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    }
  };

  const deleteFlyer = (id) => {
    setIsLoading(true);
    axios
      .delete(`${API}/flyer/${id}`, {
        headers: { "x-api-key": "ggp-pro-ject" },
      })
      .then(() => {
        alert("Flyer deleted!");
        flyerList();
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error deleting flyer");
        setIsLoading(false);
      });
  };

  const deleteFAQ = (id) => {
    setIsLoading(true);
    axios
      .delete(`${API}/faq/${id}`, {
        headers: { "x-api-key": "ggp-pro-ject" },
      })
      .then(() => {
        alert("FAQ deleted!");
        FAQList();
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error deleting FAQ");
        setIsLoading(false);
      });
  };

  return (
    <div className="data-wrapper">
      <Auth />
      <Loader isLoading={isLoading} />

      {/* Flyers Section */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => isMobile && setIsFlyerOpen(!isFlyerOpen)}
        >
          <h2>Flyers</h2>
          {isMobile && (
            <FontAwesomeIcon icon={isFlyerOpen ? faCaretUp : faCaretDown} />
          )}
        </div>

        {(isFlyerOpen || !isMobile) && (
          <div className="accordion-content">
            <button className="add-btn" onClick={() => setFlyer(true)}>
              + ADD Flyer
            </button>
            {flyer && (
              <ShowModal
                closeFlyer={() => setFlyer(false)}
                flyerdata={flyerdata}
                editData={editFlyerData}
              />
            )}
            <div className="scrollable-box">
              {flyerdata.length ? (
                flyerdata.map((item, index) => (
                  <div className="flyer-item" key={index}>
                    <img src={item.imageUrl} alt={item.name} />
                    <p>{item.name}</p>
                    <div className="action-btns">
                      <button
                        onClick={() => setEditFlyerData(item) || setFlyer(true)}
                      >
                        <EditIcon />
                      </button>
                      <button onClick={() => deleteFlyer(item._id)}>
                        <DeleteIcon color="error" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No flyers available.</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="accordion-section">
        <div
          className="accordion-header"
          onClick={() => isMobile && setIsFAQOpen(!isFAQOpen)}
        >
          <h2>FAQs</h2>
          {isMobile && (
            <FontAwesomeIcon icon={isFAQOpen ? faCaretUp : faCaretDown} />
          )}
        </div>

        {(isFAQOpen || !isMobile) && (
          <div className="accordion-content">
            <button className="add-btn" onClick={() => setFAQ(true)}>
              + ADD FAQ
            </button>
            {FAQ && (
              <DisplayFAQ
                closeFAQ={() => setFAQ(false)}
                FAQList={FAQList}
                editData={editFAQData}
              />
            )}
            <div className="scrollable-box">
              {FAQdata.length ? (
                FAQdata.map((item, index) => (
                  <div className="faq-item" key={index}>
                    <p>
                      <strong>Q:</strong> {item.question}
                    </p>
                    <p>
                      <strong>A:</strong> {item.answer}
                    </p>
                    <div className="action-btns">
                      <button
                        onClick={() => setEditFAQData(item) || setFAQ(true)}
                      >
                        <EditIcon />
                      </button>
                      <button onClick={() => deleteFAQ(item._id)}>
                        <DeleteIcon color="error" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No FAQs available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flyer;
