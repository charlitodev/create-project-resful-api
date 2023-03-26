import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return <Container>{id}</Container>;
};

export default Profile;
