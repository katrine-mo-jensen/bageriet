import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styling/product.module.scss";

export function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  useEffect(() => {
    const urlCategories = "https://api.mediehuset.net/bakeonline/categories";
    fetch(urlCategories)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "Ok") {
          setCategories(data.items);
          console.log("Categories", data.items);
        } else {
          console.error("Error fetching categories:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    const urlCategoryData = `https://api.mediehuset.net/bakeonline/categories/${selectedCategory}`;
    fetch(urlCategoryData)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.status === "Ok") {
          setSelectedCategoryData(data.item);
          console.log("Selected Category Data", data.item);
        } else {
          console.error("Error fetching selected category data:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error fetching selected category data:", error);
      });
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section className={style.productWrapper}>
      <h2>Vores elskede bagværk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi
        fuga vel impedit facilis rem quidem ducimus <br /> iusto culpa tempore.
        Suscipit nobis quisquam in nemo.
      </p>
      <section className={style.gridContainer}>
        <aside>
          <ul>
            {categories.map((item) => (
              <li
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                style={{
                  cursor: "pointer",
                  fontWeight: selectedCategory === item.id ? "bold" : "normal",
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </aside>
        <section>
          {selectedCategoryData && (
            <ul>
              {selectedCategoryData.products.map((product) => (
                <li key={product.id}>
                  <img src={product.image.fullpath} alt={product.title} />
                  <p>{product.num_comments} 💬</p>
                  <h4>{product.title}</h4>
                  <p>{product.teaser.substring(0, 100) + "..."}</p>
                  <Link to={`/products/${product.id}`}>
                    <button>See mere</button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </section>
  );
}
