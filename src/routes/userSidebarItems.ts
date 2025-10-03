import Booking from "@/pages/users/Booking";
import { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
    {
        title : "History",
        items : [
            {
                title: "Booking",
                url : "/user/booking",
                components : Booking
            }
        ]
    }
]