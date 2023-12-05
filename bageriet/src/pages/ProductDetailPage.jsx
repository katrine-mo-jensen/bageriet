import { useParams } from "react-router-dom";
import { useFetch } from "../components/UseFetch";
import style from "../styling/productDetails.module.scss";

export function ProductDetailPage() {
  const { id } = useParams();
  const url = `https://api.mediehuset.net/bakeonline/products/${id}`;
  const { data: productData, error, isLoading } = useFetch(url);
  //  console.log(productData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!productData) {
    return <p>No data available</p>;
  }

  const {
    title,
    description,
    duration,
    amount,
    image,
    num_comments,
    ingredients,
  } = productData.item;

  return (
    <section className={style.detailWrapper}>
      <div className={style.path}>
        <p>
          Produkter > <span>{title}</span>{" "}
        </p>
      </div>
      <div className={style.name}>
      <h2>{title}</h2>
      <div className={style.like}>LIKE! ❤️</div>
      </div>
      <div className={style.container}>
        <div className={style.directions}>
          <img src={image.fullpath} alt={title} />
          <p>{description}</p>
          <p>Tid: {duration} minutter</p>
          <p>Mængde: {amount} stykker</p>
        </div>
        <div className={style.ingredients}>
          <h3>Ingredienser</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} {ingredient.unit_abbr}{" "}
                {ingredient.ingredient_title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.comments}>
      <p>Kommentar</p>
      <p> {num_comments}💬</p>
      </div>
    </section>
  );
}
