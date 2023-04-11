import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_COOKIE_NAME } from "../constants/cookies";
import { ERROR_MESSAGES } from "../constants/errors";
import { authLogin, createUser } from "../api/auth";
import ls from "local-storage";
import cookies from "../utils/cookies";
import { ROUTE_PATH } from "../constants/routes";
import { TOAST_DATA, TOAST_MESSAGES } from "../constants/toast";
import { toast } from "react-toastify";

export const AuthContextProvider = createContext();

export const FuncAuth = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorHappen, setIsErrorHappen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  let navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await authLogin({ email, password });
      const { token, firstName, lastName } = data;
      cookies.set(AUTH_COOKIE_NAME, token);
      navigate(ROUTE_PATH.home_view);
    } catch (error) {
      setError(ERROR_MESSAGES.invalid_message);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await createUser({ firstName, lastName, email, password });
      navigate(ROUTE_PATH.login_form);
      toast.success(TOAST_MESSAGES.account_created, TOAST_DATA);
    } catch (error) {
      setError(ERROR_MESSAGES.invalid_message);
    }
  };

  const logoutUser = () => {
    cookies.remove(AUTH_COOKIE_NAME);
    window.location.reload("/");
  };

  return (
    <AuthContextProvider.Provider
      value={{
        setFirstName,
        setLastName,
        registerUser,
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
