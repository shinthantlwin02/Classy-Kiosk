"use client";

import ProductCard from "@/components/product-card";
import React, { useEffect, useState } from "react";
import { fakeShirtProducts } from "@/data/data";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log("products", products);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
    setProducts(fakeShirtProducts);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-10">
      {products.map((product) => (
        <Link href={`/product-detail/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
