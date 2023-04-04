import useGetPosts from "../../utils/useGetPosts";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

function usePaginate() {
  const { meta } = useGetPosts();
  const { totalPages } = meta;
  const navigate = useNavigate();
  const location = useLocation();

  function handleChange({ selected }) {
    let searchQuery;

    if (selected) {
      searchQuery = qs.stringify({ offset: selected });
    }

    navigate({
      pathname: location.pathname,
      search: searchQuery || "", // offset
    });
  }

  return { handleChange, totalPages };
}

export default usePaginate;
