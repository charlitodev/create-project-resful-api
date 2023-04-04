import { useEffect, useState } from "react";
import { getPost } from "../api/post";

function useGetIndividualPost(callback) {
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getPostData() {
    try {
      setIsLoading(true);
      const data = await getPost(callback);

      setPostData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostData();
  }, []);

  return { postData, isLoading };
}

export default useGetIndividualPost;
