import localFont from "next/font/local";
import React from "react";

const recoleta = localFont({
  src: "../fonts/recoleta-regulardemo.woff",
});

export default function CardDisplay({ infoText, info }) {
  return (
    <div className={`text-center p-2 mx-16`}>
      <h1
        className={`text-xl lg:text-2xl font-bold mb-2 text-gray-800 ${recoleta.className}`}
      >
        {infoText.find((item) => item.id === info + 1)?.heading}
      </h1>
      <p className="font-light text-md lg:text-xl text-gray-600 sm:mx-28">
        {infoText.find((item) => item.id === info + 1)?.text}
      </p>
    </div>
  );
}
