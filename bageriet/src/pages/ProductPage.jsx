import { useEffect, useState } from "react";
import { useFetch } from "../components/UseFetch";


export function ProductPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const url = `https://api.mediehuset.net/bakeonline/categories/${selectedCategory}`;
  const { data: categoriesData } = useFetch(url);
  console.log("Products in the category", categoriesData);

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
    // Fetch data for the selected category
    const fetchCategoryData = async () => {
      const response = await fetch(
        `https://api.mediehuset.net/bakeonline/categories/${selectedCategory}`
      );
      const data = await response.json();
      setSelectedCategoryData(data);
      console.log("Selected Category Data", data);
    };

    fetchCategoryData();
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
        <section>
          {selectedCategoryData && (
            <section>
              <h3>{selectedCategoryData.title}</h3>
              <p>ID: {selectedCategoryData.id}</p>
              {/* Display other relevant details here */}
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
