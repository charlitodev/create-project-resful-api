import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS_DATA } from "../configs/usersData";
import { ERROR_MESSAGES } from "../constants/errors";

export const AuthContextProvider = createContext();

export const FuncAuth = ({ children }) => {
  const [userActive, setUserActive] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    if (USERS_DATA.name !== username && USERS_DATA.password !== password) {
      setError(ERROR_MESSAGES.login_error);
    } else {
      setUserActive([
        {
          username: username,
          password: password,
        },
      ]);

      navigate("/home");
    }
  };

  const logoutUser = () => {
    setUserActive({});
    setUsername("");
    setPassword("");
  };

  return (
    <AuthContextProvider.Provider
      value={{
        loginUser,
        setUsername,
        setPassword,
        username,
        password,
        error,
        userActive,
        logoutUser,
      }}
    >
      {children}
    </AuthContextProvider.Provider>
  );
};
