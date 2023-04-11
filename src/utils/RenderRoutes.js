import { Routes, Route, useLocation } from "react-router-dom";
import { AddModal, EditModal, DeleteModal } from "../views";
import { LoginForm } from "../views";
import { ROUTE_MODAL_COMPONENT } from "../routes/index";

const RenderRoutes = ({ route }) => {
  // const location = useLocation();
  // const background = location.state && location.state.background;

  console.log(route);

  return (
    <div>
      <Routes>
        {route.map((item, id) => {
          return <Route key={id} path={item.path} element={item.component} />;
        })}
      </Routes>
      {/* <Routes location={background || location}>
        <Route exact path="/" element={<LoginForm />} />
        {route.map((item, id) => {
          return (
            <Route key={id} path={item.path} element={item.component}>
              <Route path="create/post" element={<AddModal />} />
              <Route path="edit/post/:id" element={<EditModal />} />
              <Route path="delete/post/:id" element={<DeleteModal />} />
            </Route>
          );
        })}
      </Routes> */}
      {/* {background && (
        <Routes>
          {ROUTE_MODAL_COMPONENT.map((item, id) => {
            return <Route key={id} path={item.path} element={item.component} />;
          })}
        </Routes>
      )} */}
    </div>
  );
};

export default RenderRoutes;
