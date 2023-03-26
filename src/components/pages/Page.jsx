import React from "react";
import NavbarComponent from "./NavbarComponent";
import { Home } from "../../views";
import { AddModal } from "../../components";

const Page = () => {
  return (
    <div>
      <NavbarComponent />
      <Home />
      <AddModal />
    </div>
  );
};

export default Page;
