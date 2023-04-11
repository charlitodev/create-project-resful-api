import { useState } from "react";
import { changePassword } from "../../api/auth";
import { ROUTE_PATH } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_DATA, TOAST_MESSAGES } from "../../constants/toast";
import { ERROR_MESSAGES } from "../../constants/errors";

function useChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      await changePassword({ oldPassword, newPassword, confirmPassword });
      navigate(ROUTE_PATH.login_form);
      toast.success(TOAST_MESSAGES.password_changed, TOAST_DATA);
    } catch (error) {
      setError(ERROR_MESSAGES.invalid_message);
    }
  };

  return {
    error,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    handleChangePassword,
  };
}

export default useChangePassword;
