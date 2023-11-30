import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error); 
      });
  }, [url]);

  return {
    data,
    error
  };
}
