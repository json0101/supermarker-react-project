import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import Loader from "./Loader.js";


export default function Products(props) {
  const [products, setProducts] = useState([]);
  const url = "https://react-tutorial-demo.firebaseio.com/";
  
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    fetch(url + "supermarket.json")
        .then((response) => response.json())
        .then((data) => {

          if (!data) {
            setLoading(false);
          }

          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log("Could not load products", error)
        });   
    
  }, [url]);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
