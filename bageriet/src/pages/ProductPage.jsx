import { useEffect, useState } from "react";
import { useFetch } from "../components/UseFetch";
import { Link } from "react-router-dom"; // Assuming you're using React Router

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
          setCategories(data.items); // Set categories to the 'items' array from the response
          console.log("Categories", data.items); // Log the fetched categories
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
          setSelectedCategoryData(data.item); // Set selected category data
          console.log("Selected Category Data", data.item); // Log the fetched category data
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
    <section>
      <h2>Vores elskede bagværk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi
        fuga vel impedit facilis rem quidem ducimus <br /> iusto culpa tempore.
        Suscipit nobis quisquam in nemo.
      </p>
      <section>
        <aside>
          <ul>
            {categories.map((item) => (
              <li
                key={item.id}
                onClick={() => handleCategoryClick(item.id)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </aside>
        <div>
          {selectedCategoryData && (
            <div>
              
              <ul>
                {selectedCategoryData.products.map((product) => (
                  <li key={product.id}>
                    <img src={product.image.fullpath} alt={product.title} />
                    <p>{product.num_comments} 💬</p>
                    <h4>{product.title}</h4>
                    <p>{product.teaser}</p>
                    
                    <Link to={`/products/${product.id}`}>See mere</Link>
                    {/* Add other relevant product details */}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
