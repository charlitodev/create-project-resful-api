import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_COOKIE_NAME } from "../constants/cookies";
import { authLogin, createUser } from "../api/auth";
import cookies from "../utils/cookies";

export const AuthContextProvider = createContext();

export const FuncAuth = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorHappen, setIsErrorHappen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const { data } = await authLogin({ email, password });
    const { token, userId } = data;
    setActiveId(userId);
    cookies.set(AUTH_COOKIE_NAME, token);
    navigate("/post");
  };

  const registerUser = async (e) => {
    e.preventDefault();

    await createUser({ firstName, lastName, email, password });
    navigate("/");
  };

  const logoutUser = () => {
    cookies.remove(AUTH_COOKIE_NAME);
    window.location.reload(true);
  };

  return (
    <AuthContextProvider.Provider
      value={{
        setFirstName,
        setLastName,
        registerUser,
        activeId,
        loginUser,
        setEmail,
        setPassword,
        email,
        password,
        error,
        logoutUser,
        isErrorHappen,
        setIsErrorHappen,
        isPasswordVisible,
        setIsPasswordVisible,
      }}
    >
      {children}
    </AuthContextProvider.Provider>
  );
};
