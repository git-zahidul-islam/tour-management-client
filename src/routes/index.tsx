import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { lazy } from "react";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constant/role";
import { TRole } from "@/types";
import Unauthorized from "@/pages/Unauthorized";
const About = lazy(()=> import("@/pages/About"));

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [
      {index : true, element : <Navigate to={"/admin/analyties"}/>},  
      ...generateRoutes(adminSidebarItems)
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      {index : true, element : <Navigate to={"/user/booking"}/>},
      ...generateRoutes(userSidebarItems)

    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component : Unauthorized,
    path : "/unauthorized"
  }
]);
