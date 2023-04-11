import { routerType } from "./router-types";
import HomePage from "../pages/Home/Home";
import VideoCall from "../pages/Video/VideoCall";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
const Pages: routerType[] = [
  {
    title: "home",
    path: "",
    element: <HomePage />,
  },
  {
    title: "videoCall",
    path: "/video",
    element: <VideoCall />,
  },
  {
    title: "Register",
    path: "/Register",
    element: <Register />,
  },
  {
    title: "Login",
    path: "/Login",
    element: <Login />,
  },
];

export default Pages;
