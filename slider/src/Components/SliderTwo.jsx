import { useState, useEffect, useRef } from "react";
import "./SliderTwo.css";
import img1 from "../assets/images/img_1.png";
import img2 from "../assets/images/img_2.png";
import img3 from "../assets/images/img_3.png";
import img4 from "../assets/images/img_4.png";

const SliderTwo = () => {
  const images = [img1, img2, img3, img4];
  const totalImages = images.length;

  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        slider.style.transition = "none";
        setCurrentIndex(totalImages);
      } else if (currentIndex === totalImages + 1) {
        slider.style.transition = "none";
        setCurrentIndex(1);
      }
    };

    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, totalImages]);

  return (
    <div className="slider-container">
      <h2>Slider using javascript</h2>
      <div className="slider" ref={sliderRef}>
        <img src={images[totalImages - 1]} alt="Last Image" />

        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} />
        ))}

        <img src={images[0]} alt="First Image" />
      </div>

      <button className="prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default SliderTwo;
