import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPosts } from "../api/post";

function useGetPosts() {
  const [meta, setMeta] = useState({});
  const [data, setData] = useState([]);
  const { search } = useLocation();

  async function getData() {
    try {
      const { data: dataResponse, meta: metaResponse } = await getPosts(search);

      setMeta(metaResponse);
      setData(dataResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return { data, meta, getData, setData };
}

export default useGetPosts;
