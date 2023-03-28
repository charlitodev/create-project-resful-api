import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CRUDContextProvider } from "../../context/CRUDContext";
import { USERS_DATA } from "../../configs/usersData";

const Profile = () => {
  const { id } = useParams();
  const { data } = useContext(CRUDContextProvider);

  const user_profile =
    data?.find && data.find((item) => String(item.id) === String(id));
  const { first_name, last_name, email, avatar } = user_profile;

  return (
    <Container>
      <div className="mt-5 d-flex">
        <img
          src={avatar}
          alt=""
          style={{ height: "320px", objectFit: "cover", borderRadius: "50%" }}
        />
        <div className="ms-5 mt-5">
          <h3>{first_name + " " + last_name}</h3>
          <p>{email}</p>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
