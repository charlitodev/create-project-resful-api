import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useGetIndividualPost from "../../utils/useGetIndividualPost";

const Profile = () => {
  const { id } = useParams();
  const { postData } = useGetIndividualPost(id);

  const { title, message, createdAt, updatedAt } = postData;

  return (
    <Container>
      <div className="mt-5 d-flex">
        <div className="ms-5 mt-5">
          <h3>Title: {title}</h3>
          <h3>Message: {message}</h3>
          <h3>Created At: {createdAt}</h3>
          <h3>Updated At: {updatedAt}</h3>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
