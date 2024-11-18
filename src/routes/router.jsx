import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/start-learning",
        element: <h2>This is Start-Learning page</h2>
    },
    {
        path: "/tutorials",
        element: <h1>This is tutorials page</h1>
    },
    {
        path: "/about-us",
        element: <h1>this is about us page</h1>
    },
    {
        path: "/my-profile",
        element: <h1>profile</h1>
    },
    {
        path: "/auth",
        element: <h1>this is auth page</h1>
    },
    {
        path: "*",
        element: <h1>this is error page</h1>
    }
]);

export default router;