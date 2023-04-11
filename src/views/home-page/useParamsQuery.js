import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QUERY_ROUTE_PATH } from "../../constants/routes";

function useParamsQuery() {
  const [queryValue, setQueryValue] = useState("");
  const [searchParams, setSeachParams] = useSearchParams();

  const changeSort = (query) => {
    if (query === QUERY_ROUTE_PATH.order_asc) {
      searchParams.set("order", "ASC");
    } else if (query === QUERY_ROUTE_PATH.order_desc) {
      searchParams.set("order", "DESC");
    }

    setSeachParams(searchParams);
  };

  const querySearch = () => {
    searchParams.set("search", queryValue);
    setSeachParams(searchParams);
  };

  const queryLimit = (limitNumber) => {
    searchParams.set("limit", limitNumber);
    setSeachParams(searchParams);
  };

  return {
    queryValue,
    changeSort,
    querySearch,
    setQueryValue,
    queryLimit,
  };
}

export default useParamsQuery;
