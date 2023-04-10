import { Route, Routes } from "react-router-dom";
import { routerType } from "./router-types";
import Pages from "./routers";

const Router = () => {
  const pageRoutes = Pages.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pageRoutes}</Routes>;
};
export default Router;
