import React from "react";
import Caroseal from "../components/Carousel";
import { recoleta } from "../layout";

export default function page() {
  return (
    <main className="flex flex-col items-center  bg-gray-100">
      <div className="p-2">
        <h1
          className={`text-3xl font-bold text-gray-800 mb-4 text-center ${recoleta.className}`}
        >
          Smart crib, Smarter app
        </h1>
        <p className="text-md px-2 text-gray-600 mb-4 max-w-xl text-center">
          From night vision to sleep insights, <br /> the Cradlewise app is a
          game-changer for parents.
        </p>
      </div>
      <Caroseal />
    </main>
  );
}
