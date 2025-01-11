import React, { useEffect, useState } from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/PB/JAN2025/JanArt-25_PC_Hero_3000x1200._CB552748907_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); /**5seconds */
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex == 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      console.log("previous index: ", prevIndex);
      return (prevIndex + 1) % images.length;
    });
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="slider__buttonLeft">
        &#10094;
      </button>
      <img src={images[currentIndex]} alt="amazon_banner" />
      <button onClick={goToNext} className="slider__buttonRight">
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
