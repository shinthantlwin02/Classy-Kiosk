"use client";

import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center w-[280px] h-[300px]">
      <div
        className="borderimg flex items-center justify-center w-full h-[260px] min-h-[220px]"
      >
        <Image
          src={product.image.front}
          width={200}
          height={200}
          alt="product"
          className="object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <h1 className="text-wrap text-sm font-medium text-gray-800 text-center mb-2s">
          {product.name}
        </h1>
        <p className="text-xs text-gray-600 text-center">{product.price} MMK</p>
      </div>
    </div>
  );
};

export default ProductCard;
