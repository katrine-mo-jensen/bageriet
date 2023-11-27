import { useState } from "react";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

import style from "../styling/slider.module.scss"

export function Slider() {
  const sliderArray = [slide1, slide2, slide3];
  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => {
    setSlideIndex(slideIndex +1)
  } 

  const previousSlide = () => {
    setSlideIndex(slideIndex -1)
  }

  console.log("SlideIndex", slideIndex)

  return (
    <header className={style.slider}>
      <div>
        <button onClick={()=> previousSlide()}>Venstre</button>
        <h1>Tekst her</h1>
        <button onClick={()=> nextSlide()}>Højre</button>
      </div>
      <img src={sliderArray[slideIndex]} alt="" />
    </header>
  );
}
