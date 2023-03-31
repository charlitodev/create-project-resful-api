import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  return (
    <Container>
      {/* <div className="mt-5 d-flex">
        <img
          src={avatar}
          alt=""
          style={{ height: "320px", objectFit: "cover", borderRadius: "50%" }}
        />
        <div className="ms-5 mt-5">
          <h3>{first_name + " " + last_name}</h3>
          <p>{email}</p>
        </div>
      </div> */}
    </Container>
  );
};

export default Profile;
