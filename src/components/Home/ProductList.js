import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

export default function Home(props) {
  const [products, setProducts] = useState([]);

  //fetching product data from Strapi
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://ttp-art-store.herokuapp.com/products"
      );
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
          <Carousel breakPoints={breakPoints}>
            {/* filtering products based on category */}
            {products.map((product) => {
              // <div className="product" key={idx}>

              if (product.category === props.category) {
                return (
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    // if the image is null, show a placeholder image
                    imageUrl={
                      product.image === null
                        ? "https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_6.png"
                        : product.image.url
                    }
                    artist={product.artist}
                    createdAt={product.created_at}
                    price={product.price}
                    id={product.id}
                  />
                );
              }
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
