import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const req = await fetch(url);

        if (!req.ok) {
          throw new Error("Something went wrong");
        }

        const jsonData = await req.json();
        setData(jsonData);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, error, isLoading };
};
