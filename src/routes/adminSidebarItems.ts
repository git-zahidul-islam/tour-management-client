import { ISidebarItem } from "@/types";
import { lazy } from "react";
const AddTour = lazy(()=> import("@/pages/admin/AddTour"));
const Analytics = lazy(()=> import("@/pages/admin/Analytics"));

export const adminSidebarItems : ISidebarItem[] = [
    {
      title: "Dasboard",
      items: [
        {
          title: "analyties",
          url: "/admin/analyties",
          components : Analytics,
        }
      ],
    },
    {
      title: "Tour management",
      items: [
        {
          title: "Add Tour",
          url: "/admin/add-tour",
          components : AddTour,
        }
      ],
    }
]