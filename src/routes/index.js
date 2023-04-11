import {
  Post,
  LoginForm,
  Register,
  Settings,
  AddModal,
  EditModal,
  DeleteModal,
} from "../views";
import { Page, NavbarComponent } from "../components";
import { ROUTE_PATH, MODAL_ROUTE_PATH } from "../constants/routes";
import { ProtectedAuthUser } from "../components";

const ROUTE_INDEX_COMPONENT = [
  {
    path: ROUTE_PATH.post_view,
    component: (
      <ProtectedAuthUser>
        <NavbarComponent />
        <Post />
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
    path: ROUTE_PATH.settings,
    component: (
      <ProtectedAuthUser>
        <NavbarComponent />
        <Settings />
      </ProtectedAuthUser>
    ),
  },
  {
    path: ROUTE_PATH.login_form,
    component: <LoginForm />,
  },
  {
    path: ROUTE_PATH.register_form,
    component: <Register />,
  },
];

const ROUTE_MODAL_COMPONENT = [
  {
    path: MODAL_ROUTE_PATH.create_user,
    component: <AddModal />,
  },
  {
    path: MODAL_ROUTE_PATH.edit_user,
    component: <EditModal />,
  },
  {
    path: MODAL_ROUTE_PATH.delete_user,
    component: <DeleteModal />,
  },
];

export { ROUTE_INDEX_COMPONENT, ROUTE_MODAL_COMPONENT };
