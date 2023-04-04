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
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return { data, meta, getData, setData, isLoading };
}

export default useGetPosts;
