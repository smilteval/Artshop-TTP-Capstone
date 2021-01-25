import React, { useEffect, useState } from "react";
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

  console.log(product);

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img src={product.image && product.image.url} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div>${product.price}</div>
        <div>Description: {product.description}</div>
        <div>Uploaded on: {product.date}</div>
        <div>
          By:
          <Link>{product.artist && product.artist.username}</Link>
          {/* TO DO: replace a link with artists id */}
        </div>
      </div>
    </div>
  );
}
