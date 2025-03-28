import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-3 py-4 md:px-10 md:py-10 border-b-[0.8px] border-gray-400">
      <Link href={`/`}>
        <h1 className="text-md md:text-2xl font-bold uppercase">
          Classy Kiosk
        </h1>
      </Link>

      <div className="flex items-center gap-2">
        <h1 className="text-sm font-semibold text-gray-600">LOGO</h1>
        <ShoppingBagIcon />
      </div>
    </nav>
  );
};

export default Navbar;
