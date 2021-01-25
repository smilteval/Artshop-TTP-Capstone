import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  //fetching product data from Strapi
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://ttp-art-store.herokuapp.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="product-list">
        <h3 className="product-list-title">{props.category}</h3>
        <div className="product-list-items">
          {products.map((product) => (
            <ProductCard
              title={product.title}
              description={product.description}
              imageUrl={product.image.url}
              artist={product.artist}
              createdAt={product.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
