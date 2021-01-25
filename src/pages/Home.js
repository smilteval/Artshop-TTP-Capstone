import React from "react";
import ProductList from "../components/Home/ProductList";

export default function Home() {
  return (
    <div className="home">
      <div className="all-categories">
        {/* filtering products based on category */}
        <div className="category">
          <ProductList category="Paintings"/>
        </div>
        <div className="category">
          <ProductList category="Emoji Art"/>
        </div>
        <div className="category">
          <ProductList category="Photography"/>
        </div>
      </div>
    </div>
  );
}
