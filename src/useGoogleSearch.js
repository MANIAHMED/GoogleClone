import React, { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "0e1a2fa5a4a7966e6";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
//0e1a2fa5a4a7966e6
