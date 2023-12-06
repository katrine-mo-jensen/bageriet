import { useFetch } from "./UseFetch";
import style from "../styling/latestnews.module.scss"

export function LatestNews() {
  const url = "https://api.mediehuset.net/bakeonline/news";
  const { data } = useFetch(url);

  const sortedData = data?.items.sort((a, b) => b.created - a.created);

  const latestArticles = sortedData?.slice(0, 3);
  return (
    <section className={style.container}>
      <h2>Vi elsker lækkert! brød</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis
        quae in omnis quisquam enim! Odit minus rerum molestias corporis <br />
        consequuntur ipsam, iure doloremque voluptatem, vel, mollitia
        repudiandae nesciunt id!
      </p>
      <section>
        {latestArticles?.map((item, index) => (
          <article key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.teaser.substring(0, 100) + "..."}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
