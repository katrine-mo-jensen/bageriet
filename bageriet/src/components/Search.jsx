import style from "../styling/navbar.module.scss";
import { useFetch } from "./UseFetch";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Search = () => {
  const [inputText, setInputText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const url = "https://api.mediehuset.net/bakeonline/products";
  const { data, isLoading, error } = useFetch(url);

  function search() {
    if (data && data.items) {
      const result = data.items.filter((item) =>
        item.title.toLowerCase().includes(inputText.toLowerCase())
      );
      setSearchData(result);
    }
  }

  useEffect(() => {
    if (inputText === "") {
      setSearchData([]); // Clear searchData when input is empty
    } else {
      search(); // Perform search when there is input
    }
  }, [inputText, data]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className={style.search}>
      <div className={style.searchFunction}>
        <input
          placeholder="Search"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
      <section className={style.productOverview}>
        <ul >
          {searchData.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              {item.title}
            </Link>
          ))}
        </ul>
      </section>
    </section>
  );
};
