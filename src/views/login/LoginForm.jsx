import React, { useContext } from "react";
import { BOOTSTRAP_STYLES, RAW_CSS_STYLES } from "../../configs/stylesData";
import { Button, Form, Alert } from "react-bootstrap";
import { AuthContextProvider } from "../../context/AuthContext";
import { LOGIN_FORM } from "../../constants/forms";

const LoginForm = () => {
  const { loginUser, setUsername, setPassword, username, password, error } =
    useContext(AuthContextProvider);

  return (
    <div
      className={BOOTSTRAP_STYLES.center_div}
      style={{ height: RAW_CSS_STYLES.height }}
    >
      <Form onSubmit={loginUser}>
        {error && <Alert variant={"danger"}>{error}</Alert>}
        <Form.Group className="mb-3">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <Form.Text className="text-muted">{LOGIN_FORM.sub_title}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
