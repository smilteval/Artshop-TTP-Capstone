import React, { useEffect, useState } from "react";
import ArtistCard from "./ArtistCard";

export default function Artists(props) {
  const [products, setProducts] = useState([]);


// When Strapi is Up

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
    <div className="Artist-list">
      
        {products.map((product) => (
          <ArtistCard
            title={product.title}
            description={product.description}
            //imageUrl={product.image.url}
            artist={product.artist}
            createdAt={product.created_at}
          />
        ))}
      </div>
  </div>
);

}