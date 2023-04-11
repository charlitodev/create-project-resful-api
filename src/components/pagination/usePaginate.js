import useGetPosts from "../../utils/useGetPosts";
import { useSearchParams } from "react-router-dom";

function usePaginate() {
  const { meta } = useGetPosts();
  const { totalPages } = meta;
  const [searchParams, setSeachParams] = useSearchParams();

  function handleChange({ selected }) {
    searchParams.set("offset", selected);
    setSeachParams(searchParams);
  }

  return { handleChange, totalPages };
}

export default usePaginate;
