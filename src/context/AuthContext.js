import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AUTH_COOKIE_NAME } from "../constants/cookies";
import { authLogin } from "../api/auth";

export const AuthContextProvider = createContext();

export const FuncAuth = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorHappen, setIsErrorHappen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [activeId, setActiveId] = useState("");

  const cookies = new Cookies();

  let navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const { data } = await authLogin({ email, password });
    const { token, userId } = data;
    console.log(data);

    setActiveId(userId);
    cookies.set(AUTH_COOKIE_NAME, token);
    navigate("/home");
  };

  const logoutUser = () => {
    cookies.remove(AUTH_COOKIE_NAME);
    window.location.reload(true);
  };

  return (
    <AuthContextProvider.Provider
      value={{
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
