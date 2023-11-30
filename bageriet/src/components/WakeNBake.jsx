import { useFetch } from "./UseFetch";
import { Link } from "react-router-dom";

export function WakeNBake() {
  const url = "https://api.mediehuset.net/bakeonline/products";
  const { data } = useFetch(url);

  const shuffleArray = (data) => {
    if (!data || !data.items) return []; 
    let shuffledData = [...data.items]; 
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    return shuffledData;
  };

  const shuffledData = shuffleArray(data);

  const randomProducts = shuffledData.slice(0, 8);

  return (
    <section>
      <h2>Nyeste bagværk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim
        rerum optio iusto labore provident quas nemo velit dolorum. Esse, nam?{" "}
        <br />
        Aliquid magnam cumque, aspernatur repudiandae voluptas nisi praesentium
        soluta.
      </p>
      <section>
        {randomProducts?.map((item, index) => (
          <article key={index}>
            <img src={item.image.fullpath} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.teaser}</p>
            <Link to={`/products/${item.id}`}>
              <button>Se mere</button>
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
