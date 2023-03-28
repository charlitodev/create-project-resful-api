import { createContext, useEffect, useState } from "react";
import { getUsers } from "../utils/getUsers";
import { useNavigate } from "react-router-dom";
import { USER_DEFAULT_IMG } from "../configs/imagesData";
import { USERS_DATA } from "../configs/usersData";
import axios from "axios";

export const CRUDContextProvider = createContext();

export const FuncCRUD = ({ children }) => {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  let navigate = useNavigate();

  // For loader
  const [isLoading, setIsLoading] = useState(true);

  // Fetching user
  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers();

      setData(result.data);
      setData((prevState) => [...prevState, USERS_DATA]);
    };

    fetchData();
    setIsLoading(false);
  }, []);

  const createUser = (firstname, lastname, email) => {
    axios
      .post("https://reqres.in/api/users", {
        email: email,
        first_name: firstname,
        last_name: lastname,
        avatar: USER_DEFAULT_IMG,
      })
      .then((res) => {
        setData((prevState) => [res.data, ...prevState]);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate(-1);
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        const filterData = data.filter(
          (item) => String(item.id) !== String(id)
        );
        setData(filterData);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate(-1);
  };

  const editUser = (id) => {
    const edit = data.map((item) => {
      if (String(item.id) === String(id)) {
        return {
          ...item,
          first_name: firstName,
          last_name: lastName,
          email: userEmail,
        };
      }

      setFirstName("");
      setLastName("");
      setUserEmail("");
      return item;
    });

    setData(edit);
    navigate(-1);
  };

  return (
    <CRUDContextProvider.Provider
      value={{
        editUser,
        deleteUser,
        createUser,
        data,
        isLoading,
        setFirstName,
        setLastName,
        setUserEmail,
        firstName,
        lastName,
        userEmail,
      }}
    >
      {children}
    </CRUDContextProvider.Provider>
  );
};
