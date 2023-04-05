import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPosts } from "../api/post";

function useGetPosts() {
  const [meta, setMeta] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { search } = useLocation();

  async function getData() {
    try {
      setIsLoading(true);
      const { data: dataResponse, meta: metaResponse } = await getPosts(search);

      setMeta(metaResponse);
      setData(dataResponse);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return { isLoading, data, meta, reload: getData };
}

export default useGetPosts;
