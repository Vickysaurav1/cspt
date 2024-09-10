import React, { useEffect, useState } from "react";
import { srcLinkArr, textArr } from "../utils/utils";

const Hero = () => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [visibleLinkIndex, setVisibleLinkIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [textLoaded, setTextLoaded] = useState(true); // For text animation

  // Text change every 5 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      // Start text animation before switching
      setTextLoaded(false);

      setTimeout(() => {
        setVisibleTextIndex((prevIndex) =>
          prevIndex === textArr.length - 1 ? 0 : prevIndex + 1
        );
        setTextLoaded(true); // Trigger text animation
      }, 500);
    }, 5000);

    return () => clearInterval(textInterval); // Cleanup the interval
  }, []);

  // Image change every 5 seconds
  useEffect(() => {
    const imgInterval = setInterval(() => {
      // Start image animation before switching
      setImageLoaded(false);

      setTimeout(() => {
        setVisibleLinkIndex((prevIndex) =>
          prevIndex === srcLinkArr.length - 1 ? 0 : prevIndex + 1
        );
        setImageLoaded(true); // Trigger image animation
      }, 500);
    }, 5000);

    return () => clearInterval(imgInterval); // Cleanup the interval
  }, []);

  return (
    <div className="flex sm:flex-row flex-col gap-8 sm:gap-0 text-white">
      {/* Text Section with left-to-right animation */}
      <section className="flex flex-col gap-5 justify-center items-center w-[100%] sm:w-1/2 text-center">
        <p
          className={`font-bold text-white text-xl sm:text-7xl transform transition-transform duration-1000 ease-out ${
            textLoaded
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          {textArr[visibleTextIndex]}
        </p>
        <p className="font-mono font-medium text-xl text-slate-300 sm:text-slate-300transition-opacity duration-1000 ease-in-out transform transition-transform">
          A complete career solution for students passing out from +2 in India
        </p>
      </section>

      {/* Image Section with consistent "emerging" effect */}
      <section className="sm:w-1/2 w-[100%] perspective-1000 flex justify-center">
        <img
          className={`sm:w-3/4 w-auto h-auto rounded-lg transform transition-transform duration-1000 ease-out ${
            imageLoaded
              ? "scale-100 translate-z-0 opacity-100"
              : "scale-50 translate-z-[-100px] opacity-0"
          }`}
          src={srcLinkArr[visibleLinkIndex]}
          alt="Hero Image"
        />
      </section>
    </div>
  );
};

export default Hero;
