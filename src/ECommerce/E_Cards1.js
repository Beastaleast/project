import React, { useEffect, useState } from "react";
import axios from "axios";
import "./E_Cards1.css";

function E_Cards1() {
  const APIPRODECT = "http://localhost:3001/products";
  const [products, setProducts] = useState([]);

  // Fetch products when the component is mounted
  useEffect(() => {
    axios
      .get(APIPRODECT, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then((response) => {
        setProducts(response.data); // Store fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="card" key={index}>
            <img className="card-img" src={product.image} alt={product.name} />
            <div className="card-content">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-price">${product.discountedPrice}</p>
              <p className="card-description">{product.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading products...</p> // Show a loading message while data is fetched
      )}
    </div>
  );
}

export default E_Cards1;
