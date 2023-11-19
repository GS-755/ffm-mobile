import { useState, useEffect } from "react";
import axios from "axios";

// fetch API async function
function useFetch(url) {
  const [cate, setCate] = useState(null);
  useEffect(() => {
    axios.get(url)
      .then(
        response => setCate(response.data)
      )
  }, [url]);

  return cate;
}

export default useFetch;