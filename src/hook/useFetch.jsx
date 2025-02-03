import React, { useEffect, useState } from "react";
import { fetchData } from "../api/CountryApi/CountryApi";

const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
