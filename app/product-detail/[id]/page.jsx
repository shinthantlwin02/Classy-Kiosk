"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fakeShirtProducts } from "@/data/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useMediaQuery } from "react-responsive";

const ProductDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const product = fakeShirtProducts.find((product) => product.id === id);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div>
      {isMobile && (
        <div className="flex flex-col mx-4 my-10">
          <div className="borderimg flex justify-center items-center">
            <Image
              src={product.image.front}
              width={300}
              height={300}
              alt="product"
              className="object-cover min-w-[300px]"
            />
          </div>

          <div className="flex items-center justify-center gap-10 borderimg-left-reverse borderimg-right-reverse">
            <Image
              src={product.image.front}
              width={60}
              height={40}
              alt="product"
              className="object-cover"
            />
            <Image
              src={product.image.back}
              width={60}
              height={0}
              alt="product"
              className="object-cover"
            />
          </div>

          <div className="px-2 py-4 borderimg">
            <h1 className="text-lg font-semibold uppercase">{product.name}</h1>
            <p className="text-xs text-gray-500 font-medium mb-4 uppercase">
              MMK {product.price}
            </p>
            <p className="text-sm font-medium mb-2 uppercase">
              Color: {product.color}
            </p>
            <p className="text-sm font-medium text-gray-500 uppercase">
              {product.description}
            </p>
          </div>

          <div className="py-4 borderimg-left-reverse borderimg-right-reverse borderimg-bottom flex justify-between px-10">
            {product.size.map((data, id) => (
              <button key={id}>{data}</button>
            ))}
          </div>

          <Link href={`/cart`}>
            <Button
              className={cn(
                "bg-transparent text-black text-lg w-full borderimg-left borderimg-right borderimg-bottom py-7"
              )}
            >
              Add to Cart
            </Button>
          </Link>
        </div>
      )}
      {isDesktop && (
        <div className="flex gap-10 md:gap-30 items-center justify-center container mx-auto my-20 max-md:px-4">
          <Image
            src={product.image.front}
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
            <Link href={`/cart`}>
              <Button>Add to Cart</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
