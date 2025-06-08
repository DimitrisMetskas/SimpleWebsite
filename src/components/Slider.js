import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <>
      <div role="Slider" className="slider-container">
        <button className="prev" onClick={prevSlide}>{"<"}</button>
        <div className="slider">
          <h3>{images[index].alt}</h3>
          <img src={images[index].src} alt={images[index].alt} />
          <p>{images[index].label}</p>
        </div>  
        <button className="next" onClick={nextSlide}>{">"}</button>
      </div>
    </>
  );
};

export default Slider;
