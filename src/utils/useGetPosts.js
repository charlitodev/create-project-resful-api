import { useState, useEffect } from "react";
import { getPosts } from "../api/post";

function useGetPosts() {
  const [meta, setMeta] = useState({});
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const { data: dataResponse, meta: metaResponse } = await getPosts(
        "?limit=10&offset=0&order=ASC&orderBy=postId"
      );
      setMeta(metaResponse);
      setData(dataResponse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, meta, onReload: getData, setData };
}

export default useGetPosts;
