import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

export function Slider() {
  const sliderArray = [slide1, slide2, slide3];

  return (
    <header>
      <div>
        <button>Venstre</button>
        <h1>Tekst her</h1>
        <button>Højre</button>
      </div>
      <img src={sliderArray[0]} alt="" />
    </header>
  );
}
