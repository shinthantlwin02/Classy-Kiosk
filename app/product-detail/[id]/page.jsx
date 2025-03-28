"use client";
import { Button } from "@/components/ui/button";
import { fakeShirtProducts } from "@/data/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const product = fakeShirtProducts.find((product) => product.id === id);
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-30 items-center justify-center container mx-auto my-20 max-md:px-4">
      <Image
        src={product.image}
        width={300}
        height={300}
        alt="product"
        className="object-cover min-w-[300px]"
      />
      <div>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-sm mb-4">{product.price} MMK</p>
        <p className="text-md font-medium mb-2">Color: {product.color}</p>
        <p className="text-md font-medium text-gray-500 mb-4">
          {product.description}
        </p>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
