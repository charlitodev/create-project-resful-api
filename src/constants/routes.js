export const ROUTE_PATH = {
  post_view: "/post/:id",
  login_form: "/",
  register_form: "/register",
  home_view: "/post",
  settings: "/settings",
};

export const MODAL_ROUTE_PATH = {
  create_user: "/create/post",
  edit_user: "/edit/post/:id",
  delete_user: "/delete/post/:id",
};

export const QUERY_ROUTE_PATH = {
  order_asc: "?order=ASC",
  order_desc: "?order=DESC",
  order_by_createdAt: "?orderBy=createdAt",
};
