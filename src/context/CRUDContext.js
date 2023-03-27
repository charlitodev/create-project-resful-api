import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/getUsers";

export const CRUDContextProvider = createContext();

export const FuncCRUD = ({ children }) => {
  const [data, setData] = useState([]);

  // For loader
  const [isLoading, setIsLoading] = useState(true);

  // Fetching user
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setData(result.data);
    };

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <CRUDContextProvider.Provider value={{ data, isLoading }}>
      {children}
    </CRUDContextProvider.Provider>
  );
};
