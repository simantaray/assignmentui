/* eslint-disable @next/next/no-img-element */
"use client";

import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import CardDisplay from "./CardDisplay";

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  { ssr: false }
);

const CarouselComponent = () => {
  const [info, setInfo] = useState(0);
  const handleInfoChange = (index) => {
    setInfo(index);
  };

  const infoText = [
    {
      id: 1,
      image: "/images/Phone-1.png",
      heading: "Stay connected",
      side: "left",
      position: "top",
      text: "Check in on your baby anywhere, any time from the livestream monitor and other stress-free features in our app.",
    },
    {
      id: 2,
      image: "/images/phone-3.png",
      heading: "Smart soothing",
      side: "right",
      position: "top",
      text: "Track, analyze, and understand your baby’s sleep patterns so that you can all rest better — and smarter.",
    },
    {
      id: 3,
      image: "/images/phone-2.png",
      heading: "Smart soothing",
      side: "left",
      position: "mid",
      text: "The Smart soothing feature calms your baby before they even start crying.",
    },
    {
      id: 4,
      image: "/images/phone-4.png",
      heading: "Sounds for better sleep",
      side: "right",
      position: "mid",
      text: "There are three types of noise and a range of nature sounds available to choose from.",
    },
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="block sm:hidden">
        <Carousel
          onChange={handleInfoChange}
          useKeyboardArrows={true}
          showThumbs={false}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={70}
          stopOnHover={false}
          infiniteLoop={true}
          showArrows={false}
          interval={10000}
          showStatus={false}
        >
          {infoText.map((URL, index) => (
            <div key={index} className={`w-full flex flex-row relative`}>
              <img className="" alt={`Image ${index + 1}`} src={URL.image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden sm:block">
        <Carousel
          onChange={handleInfoChange}
          useKeyboardArrows={true}
          showThumbs={false}
          autoPlay={true}
          centerMode={true}
          centerSlidePercentage={100}
          stopOnHover={false}
          infiniteLoop={true}
          showArrows={false}
          interval={10000}
          showStatus={false}
        >
          {infoText.map((URL, index) => (
            <div key={index} className={`w-full flex flex-row relative`}>
              <div className="hidden xl:block">
                <ImageTextDisplay
                  infoText={infoText}
                  info={info}
                  index={index}
                />
              </div>
              <img
                className="px-64 xl:px-[510px]"
                alt={`Image ${index + 1}`}
                src={URL.image}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="block xl:hidden">
        <CardDisplay info={info} infoText={infoText} />
      </div>
    </div>
  );
};

export default CarouselComponent;

function ImageTextDisplay({ infoText, info, index }) {
  const currentText = infoText[index];
  if (info + 1 === 1) {
    return (
      <div
        className={`absolute w-96 flex flex-row text-left left-[180px] top-36 mr-96 `}
      >
        <div className="flex max-w-52 flex-col ">
          <h1 className="text-md font-bold text-gray-800">
            <ExampleComponent text={currentText.heading} />
          </h1>
          <p className="font-light text-sm text-gray-600">
            {" "}
            <ExampleComponent text={currentText.text} />
          </p>
        </div>

        <div className="absolute right-0 w-1/2 top-[-40px]">
          <img src="/images/arrow1.png" alt="dotted line" className=" h-auto" />
        </div>
      </div>
    );
  }
  if (info + 1 === 3) {
    return (
      <div
        className={`absolute w-96 flex flex-row text-left left-[165px] top-[150px] mr-96 `}
      >
        <div className="flex max-w-52 flex-col ">
          <h1 className="text-md font-bold text-gray-800">
            <ExampleComponent text={currentText.heading} />
          </h1>
          <p className="font-light text-sm text-gray-600">
            {" "}
            <ExampleComponent text={currentText.text} />
          </p>
        </div>

        <div className="absolute right-0 w-1/2 top-2">
          <img src="/images/arrow2.png" alt="dotted line" className=" h-auto" />
        </div>
      </div>
    );
  }
  if (info + 1 === 2 || 4) {
    return (
      <div
        className={`absolute w-96 flex flex-row top-64 text-left right-0 mr-44`}
      >
        <div className="absolute right-52 w-1/2 top-2">
          <img src="/images/arrow3.png" alt="dotted line" className="h-auto" />
        </div>
        <div className="absolute left-[180px] top-1 pl-2 flex max-w-52 flex-col ">
          <h1 className="text-md font-bold text-gray-800">
            <ExampleComponent text={currentText.heading} />
          </h1>
          <p className="font-light text-sm text-gray-600">
            <ExampleComponent text={currentText.text} />
          </p>
        </div>
      </div>
    );
  }
}

const ExampleComponent = ({ text }) => {
  return (
    <TypeAnimation sequence={[text]} wrapper="span" cursor={false} speed={50} />
  );
};
