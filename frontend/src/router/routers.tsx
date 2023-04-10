import { routerType } from "./router-types";
import HomePage from "../pages/Home/Home";
import VideoCall from "../pages/Video/VideoCall";

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
];

export default Pages;
