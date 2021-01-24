import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="productList">
      <div class="products" style={{ display: "flex" }}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
