import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 className="text-3xl">Classy Kiosk</h1>
      <Button className={`bg-gray-800`}>Shop now</Button>
    </div>
  );
};

export default HomePage;
