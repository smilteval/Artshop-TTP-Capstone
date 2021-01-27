import React, { useEffect, useState } from "react";
import './SingleProduct.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCart from "../components/Cart/AddToCart";

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

  console.log(product);

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img src={product.image && product.image.url} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>

        <div className="price">${product.price}</div>

        <div className="Info">
        <div><strong>Description: </strong> {product.description}</div>
        <div><strong>Uploaded on: </strong> {product.date}</div>
        <div>
          <strong>Created by: </strong>
          <Link>{product.artist && product.artist.username}</Link>
          {/* TO DO: replace a link with artists id */}
        </div>
        </div>

        <AddToCart product={product}/>

      </div>
    </div>
  );
}
