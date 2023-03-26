import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/getUsers";

export const CRUDContextProvider = createContext();

export const FuncCRUD = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <CRUDContextProvider.Provider value={{ data }}>
      {children}
    </CRUDContextProvider.Provider>
  );
};
