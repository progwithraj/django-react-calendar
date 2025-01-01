import { lazy } from "react";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import { MdReportGmailerrorred } from "react-icons/md";

const Home = lazy(() => import("./pages/Home/Home.Page.jsx"));
const Calendar = lazy(() => import("./pages/Calendar/Calendar.Page.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.Page.jsx"));

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
    name: "Calendar",
    icon: <CalendarOutlined />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
    name: "Not Found",
    icon: <MdReportGmailerrorred />,
  },
];
