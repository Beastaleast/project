import React, { useEffect, useState } from "react";
import axios from "axios";
import "./E_Cards1.css";

function E_Cards1() {
  const APIPRODECT = "https://my-api-six-steel.vercel.app/api/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(APIPRODECT, {
        headers: {
          "x-api-key": "ggp-pro-ject",
        },
      })
      .then((response) => {
        setProducts(response.data);
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
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default E_Cards1;
