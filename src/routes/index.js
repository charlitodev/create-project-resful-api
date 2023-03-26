import { Profile, LoginForm } from "../views";
import { Page, NavbarComponent, AddModal } from "../components";
import { ROUTE_PATH, MODAL_ROUTE_PATH } from "../constants/routes";
import { ProtectedAuthUser } from "../components";

const ROUTE_INDEX_COMPONENT = [
  {
    path: ROUTE_PATH.profile_view,
    component: (
      <ProtectedAuthUser>
        <NavbarComponent />
        <Profile />
      </ProtectedAuthUser>
    ),
  },
  {
    path: ROUTE_PATH.home_view,
    component: (
      <ProtectedAuthUser>
        <Page />
      </ProtectedAuthUser>
    ),
  },
  {
    path: ROUTE_PATH.login_form,
    component: <LoginForm />,
  },
  {
    isModal: true,
    path: MODAL_ROUTE_PATH.modal_add,
    component: (
      <ProtectedAuthUser>
        <AddModal />
      </ProtectedAuthUser>
    ),
  },
];

export default ROUTE_INDEX_COMPONENT;
