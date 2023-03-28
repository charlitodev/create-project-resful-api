import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";

const Profile = () => {
  const { id } = useParams();

  const { data } = useContext(CRUDContextProvider);

  const user_profile =
    data?.find && data.find((item) => String(item.id) === String(id));

  return <Container>{id}</Container>;
};

export default Profile;
