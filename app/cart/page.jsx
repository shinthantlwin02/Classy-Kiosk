"use client";

import { Button } from "@/components/ui/button";
import { fakeCartProducts } from "@/data/data";
import { cn } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cart = () => {
  // TODO: Update cart data with real API response when "Add to Cart" is triggered from product page

  const [cartProducts, setCartProducts] = useState(fakeCartProducts);

  const handleDecreaseQuantity = (id) => {s
    setCartProducts((prevCartProduct) =>
      prevCartProduct.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncreaseQuantity = (id) => {
    setCartProducts((prevCartProduct) =>
      prevCartProduct.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setCartProducts((prevCartProduct) =>
      prevCartProduct.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="px-4 container mx-auto">
      <h1 className="text-2xl text-center font-medium uppercase my-4">cart</h1>

      {/* cart items */}
      <div className="borderimg-left borderimg-right borderimg-top flex flex-col my-10">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="borderimg-bottom flex flex-col items-center py-3 px-2"
          >
            <div
              className="flex justify-end w-full"
              onClick={() => handleRemoveProduct(product.id)}
            >
              <X className="p-1 rounded-full border border-black" />
            </div>
            <Image
              src={product.image.front}
              width={300}
              height={300}
              alt="product"
              className="object-cover min-w-[300px] mb-4"
            />
            <div className="px-2 py-4 text-center">
              <h1 className="text-lg font-semibold uppercase">
                {product.name}
              </h1>
              <p className="text-sm font-medium mb-2 uppercase">
                Color: {product.color}
              </p>
              <p className="text-xs text-gray-500 font-medium mb-4 uppercase">
                MMK {product.price}
              </p>
            </div>

            <div className="flex items-center gap-4 py-4">
              <Button
                className={cn("bg-transparent text-black shadow-none")}
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                <Minus />
              </Button>
              <p>{product.quantity}</p>
              <Button
                className={cn("bg-transparent text-black shadow-none")}
                onClick={() => handleIncreaseQuantity(product.id)}
              >
                <Plus />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* cart items end */}

      {/* payment section */}
      <div className="flex items-center justify-between">
        <p className="uppercase text-lg font-bold">Total inc. taxes</p>
        <p>{totalPrice} MMK</p>
      </div>

      <Button
        className={cn(
          "w-full uppercase my-4 rounded-none py-6 border border-gray-500 bg-white hover:bg-black active:bg-black text-black active:text-white hover:text-white"
        )}
      >
        Checkout
      </Button>

      <div className="flex items-center justify-center gap-2 mb-8">
        <Link href={`/`}>
          <Image
            src="/icons/kbz-pay.svg"
            width={40}
            height={40}
            alt="kbz-pay"
            className="object-cover"
          />
        </Link>
        <Link href={`/`}>
          <Image
            src="/icons/wave-pay.svg"
            width={35}
            height={35}
            alt="kbz-pay"
            className="object-cover"
          />
        </Link>
        <Link href={`/`}>
          <Image
            src="/icons/aya-pay.svg"
            width={35}
            height={35}
            alt="kbz-pay"
            className="object-cover"
          />
        </Link>
      </div>
      {/* payment section end */}
    </div>
  );
};

export default Cart;
