import localFont from "next/font/local";
import React from "react";

const recoleta = localFont({
  src: "../fonts/recoleta-regulardemo.woff",
});

export default function CardDisplay({ infoText, info }) {
  return (
    <div className={`text-center mt-4 p-2 mx-16`}>
      <h1
        className={`text-3xl lg:text-4xl font-bold mb-2 text-gray-800 ${recoleta.className}`}
      >
        {infoText.find((item) => item.id === info + 1)?.heading}
      </h1>
      <p className="font-light text-md lg:text-xl text-gray-600">
        {infoText.find((item) => item.id === info + 1)?.text}
      </p>
    </div>
  );
}
