import { useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import arrow from "../assets/images/chevron.png";

import style from "../styling/slider.module.scss";

export function Slider() {
  const sliderArray = [slide1, slide2, slide3];
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < sliderArray.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const previousSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(sliderArray.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleSliderNav = (index) => {
    setSlideIndex(index);
  };

  return (
    <header className={style.slider}>
      <div>
        <button onClick={() => previousSlide()}>
          <img
            className={style.leftArrow}
            src={arrow}
            alt="left pointing arrow"
          />
        </button>
        <h1>Vi elsker at lave brød</h1>
        <button onClick={() => nextSlide()}>
          <img
            className={style.rightArrow}
            src={arrow}
            alt="right pointing arrow"
          />
        </button>
      </div>
      <img src={sliderArray[slideIndex]} alt="" />
      <section>
        {sliderArray.map((item, index) => {
          return (
            <span
              key={index}
              style={
                slideIndex === index
                  ? { backgroundColor: "rgb(129,120,113)" }
                  : null
              }
              onClick={() => handleSliderNav(index)}
            />
          );
        })}
      </section>
    </header>
  );
}
