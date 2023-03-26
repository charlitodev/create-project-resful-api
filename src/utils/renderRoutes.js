import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AddModal } from "../components";

function renderRoutes(route) {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      {route.map((item, id) => {
        return (
          <Route key={id} path={item.path} element={item.component}>
            {item.isModal && <Route path="/modal" element={item.component} />}
          </Route>
        );
      })}
      {background && (
        <Routes>
          <Route path="/modal" element={<AddModal />} />
        </Routes>
      )}
    </Routes>
  );
}

export default renderRoutes;
