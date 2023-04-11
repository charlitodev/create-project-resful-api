import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPosts } from "../api/post";

function useGetPosts() {
  const [meta, setMeta] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useLocation();

  async function getData() {
    setIsLoading(true);

    try {
      const { data: dataResponse, meta: metaResponse } = await getPosts(search);

      setMeta(metaResponse);
      setData(dataResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return { data, meta, isLoading, onReload: getData, getData };
}

export default useGetPosts;
