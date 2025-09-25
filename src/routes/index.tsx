import App from "@/App";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component : App,
        children: [
            {
                path : "about",
                Component: About
            }
        ]
    },
    {
        Component : Login,
        path : "/login"
    },
    {
        Component : Register,
        path : "/register"
    }
]);

export default router;