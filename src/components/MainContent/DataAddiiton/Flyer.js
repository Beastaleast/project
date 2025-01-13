import React, { useState, useEffect } from "react";
import "./Flyer.css";
import ShowModal from "./ShowModal";
import DisplayFAQ from "./DisplayFAQ";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../Common/loader";

const Flyer = () => {
  const API = "https://ggp-api.onrender.com/api/flyer";
  const APIF = "https://ggp-api.onrender.com/api/faq";

  const [flyer, setFlyer] = useState(false);
  const [FAQ, setFAQ] = useState(false);
  const [flyerdata, setFlyerdata] = useState([]);
  const [FAQdata, setFAQdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    flyerList();
    FAQList();
  }, []);

  const flyerList = async () => {
    try {
      const response = await axios.get(API, {
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
      const response = await axios.get(APIF, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      });
      setFAQdata(response.data);
    } catch (error) {
      console.error("Error fetching faq data:", error);
    }
  };
  const closeFlyer = () => {
    setFlyer(false);
    console.log("hello");
  };

  const deleteFlyer = (id) => {
    setIsLoading(true);
    axios
      .delete(API + "/" + id, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then((response) => {
        window.alert("Flyer deleted!!!");
        setIsLoading(false);
        flyerList();
      })
      .catch((error) => {
        window.alert("Flyer can not be deleted due to some error", error);
        setIsLoading(false);
      });
  };

  const closeFAQ = () => {
    setFAQ(false);
  };

  return (
    <div className="DataAdd">
      <Loader isLoading={isLoading} />
      <div>    
        <div className="sidebar-align">
        <button className="DataAddition-btn" onClick={() => setFlyer(true)}>
          ADD Flyer
        </button>
        {flyer && <ShowModal closeFlyer={closeFlyer} flyerdata={flyerdata} />}
      </div>

      <div className="flyer-container">
        {flyerdata.length > 0 ? (
          flyerdata.map((item, index) => (
            <div className="flyer-item" key={index}>
              <img src={item.imageUrl} alt={`Flyer ${index}`} />
              <div>
                <p>{item.name}</p>
              </div>
              <button>
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
        {FAQ && <DisplayFAQ closeFAQ={closeFAQ} FAQList={FAQList} />}
      </div>
      <div className="faq-container">
        {FAQdata.length > 0 ? (
          FAQdata.map((item, index) => (
            <div className="FAQ-item" key={index}>
              <div>
                <strong>Question:</strong> {item.ques}
              </div>
              <div>
                <strong>Answer:</strong> {item.ans}
              </div>
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
