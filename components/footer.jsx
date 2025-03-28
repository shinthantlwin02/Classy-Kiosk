import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-2 mx-4 md:container md:mx-auto py-8 md:py-10  flex flex-col border-t-[0.8px] border-t-gray-500">
      <Link
        href={`/contact`}
        className="text-sm font-medium text-gray-500 uppercase mb-2"
      >
        contact
      </Link>
      <Link
        href={`/`}
        className="text-sm font-medium text-gray-500 uppercase mb-4"
      >
        local stores
      </Link>
      <Link
        href={`/`}
        className="text-sm font-medium text-gray-500 uppercase mb-2"
      >
        facebook
      </Link>
      <Link
        href={`/`}
        className="text-sm font-medium text-gray-500 uppercase mb-4"
      >
        instagram
      </Link>
      <Link
        href={`/`}
        className="text-sm font-medium text-gray-500 uppercase mb-2"
      >
        privacy policy
      </Link>
      <Link
        href={`/`}
        className="text-sm font-medium text-gray-500 uppercase mb-4"
      >
        terms & conditions
      </Link>
      <p className="text-xs text-gray-400 uppercase">&copy; 2025 classykiosk</p>
    </div>
  );
};

export default Footer;
