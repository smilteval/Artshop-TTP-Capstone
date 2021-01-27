import React, { useEffect, useState } from "react";
import './SingleProduct.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleProduct() {
  const productId = useParams().id;

  const [product, setProduct] = useState([]);

  //fetching one product's data from Strapi
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://ttp-art-store.herokuapp.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, []);

  
  let date = (product.createdAt)

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img src={product.image && product.image.url} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>

        <div className="price">${product.price}</div>

        <div className="Info">


        <div className="InfoLeft"><strong>Uploaded on </strong>{date}</div>
          <div className="InfoRight"> </div>
        <div className="InfoLeft"> <strong>Created by </strong></div>
        <div className="InfoRight">
          <Link className="artistName">{product.artist && product.artist.username}</Link>
          {/* TO DO: replace a link with artists id */}
        </div>
        <div className="InfoLeft"><strong>Description </strong></div>
          <div className="InfoRight"> {product.description}</div>
        </div>

        {/* <div className="add2Cart">
          {/* button to add item to cart */}
          {/* <div>Add to cart</div> */}
          {/* <Link to="./cart"/> */}
        {/* </div> */} 

      </div>
    </div> 
  );
}
