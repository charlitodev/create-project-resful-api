import { useEffect, useState } from "react";
import { getPost } from "../api/post";

function useGetIndividualPost(callback) {
  const [postData, setPostData] = useState({});

  async function getPostData() {
    try {
      const data = await getPost(callback);

      setPostData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostData();
  }, []);

  return { postData };
}

export default useGetIndividualPost;
