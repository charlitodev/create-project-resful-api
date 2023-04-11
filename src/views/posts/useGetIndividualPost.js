import { useEffect, useState } from "react";
import { getPost } from "../../api/post";

function useGetIndividualPost(callback) {
  const [postData, setPostData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function getPostData() {
    setIsLoading(true);

    try {
      const data = await getPost(callback);

      setPostData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getPostData();
  }, []);

  return { postData, isLoading };
}

export default useGetIndividualPost;
