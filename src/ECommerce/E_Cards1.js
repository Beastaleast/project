import React, { useEffect, useState } from "react";
import axios from "axios";
import "./E_Cards1.css";

function E_Cards1(props) {
  const APIPRODECT = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const getProduct = () => {
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
  };
  

  return (
    <div className="container">
      {products.map((product, index) => (
        <div className="u" key={index}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.discountedPrice}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default E_Cards1;
