import { useFetch } from "./UseFetch";
import { Link } from "react-router-dom";
import style from "../styling/wakenbake.module.scss"

export function WakeNBake() {
  const url = "https://api.mediehuset.net/bakeonline/products";
  const { data } = useFetch(url);
  // console.log(data)

  const sortedData = data?.items.sort((a, b) => b.created - a.created);

  const latestArticles = sortedData?.slice(0, 8);

  return (
    <section className={style.wakenbakeContainer}>
      <h2>Nyeste bagværk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim
        rerum optio iusto labore provident quas nemo velit dolorum. Esse, nam?{" "}
        <br />
        Aliquid magnam cumque, aspernatur repudiandae voluptas nisi praesentium
        soluta.
      </p>
      <section>
        {latestArticles?.map((item, index) => (
          <article key={index}>
            <img src={item.image.fullpath} alt={item.title} />
            <p>{item.num_comments} 💬</p>
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
