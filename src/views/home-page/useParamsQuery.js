import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetPosts from "../../utils/useGetPosts";

function useParamsQuery() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const { getData } = useGetPosts();

  const changeSort = async (query) => {
    // order
    if (query === "?order=ASC") {
      navigate({
        pathname: location.pathname,
        search: query,
      });
    } else if (query === "?order=DESC") {
      navigate({
        pathname: location.pathname,
        search: query,
      });
    } else if (query === "?orderBy=createdAt") {
      navigate({
        pathname: location.pathname,
        search: query,
      });
    }
  };

  return { changeSort };
}

export default useParamsQuery;
