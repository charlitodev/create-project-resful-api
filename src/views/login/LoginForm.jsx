import React, { useContext } from "react";
import { BOOTSTRAP_STYLES, RAW_CSS_STYLES } from "../../configs/stylesData";
import { Button, Form, Alert } from "react-bootstrap";
import { AuthContextProvider } from "../../context/AuthContext";
import { LOGIN_FORM } from "../../constants/forms";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { authLogin } from "../../api/auth";

const LoginForm = () => {
  const {
    loginUser,
    setEmail,
    setPassword,
    email,
    password,
    error,
    isErrorHappen,
    setIsErrorHappen,
    isPasswordVisible,
    setIsPasswordVisible,
  } = useContext(AuthContextProvider);

  return (
    <div
      className={BOOTSTRAP_STYLES.center_div}
      style={{ height: RAW_CSS_STYLES.height }}
    >
      <Form onSubmit={loginUser}>
        {error && (
          <Alert
            variant={"danger"}
            className={`${isErrorHappen ? "alert__danger" : ""}`}
            onAnimationEnd={() => setIsErrorHappen(false)}
          >
            {error}
          </Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label>User email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">{LOGIN_FORM.sub_title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ position: "relative" }}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div style={{ position: "absolute", bottom: ".5em", right: ".5em" }}>
            {isPasswordVisible ? (
              <AiFillEye
                className="eye__hover"
                size={25}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <AiFillEyeInvisible
                className="eye__hover"
                size={25}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </div>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
