import React, { useContext } from "react";
import { BOOTSTRAP_STYLES, RAW_CSS_STYLES } from "../../configs/stylesData";
import { Button, Form, Alert } from "react-bootstrap";
import { AuthContextProvider } from "../../context/AuthContext";
import { LOGIN_FORM } from "../../constants/forms";
import useChangePassword from "./useChangePassword";

const Settings = () => {
  const { isErrorHappen, setIsErrorHappen } = useContext(AuthContextProvider);

  const {
    error,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
  } = useChangePassword();

  return (
    <div className={BOOTSTRAP_STYLES.center_div} style={{ height: "80vh" }}>
      <Form onSubmit={handleChangePassword}>
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
          <h3>Settings</h3>
          <hr></hr>{" "}
          <Form.Control
            type="text"
            placeholder="Enter old password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter new password"
            onChange={(e) => setNewPassword(e.target.value)}
            className="my-3"
          />
          <Form.Control
            type="text"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Form.Text className="text-muted">{LOGIN_FORM.sub_title}</Form.Text>
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Change password
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
