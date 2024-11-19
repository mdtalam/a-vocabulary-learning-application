import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import AuthLayOut from "../MainLayOut/AuthLayOut";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import LessonPage from "../Pages/LessonPage";
import StartLearning from "../Pages/StartLearning";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/start-learning",
                element: <StartLearning></StartLearning>,
                loader: () => fetch('/Lesson.json')
            },
            {
                path: "/lesson/:lesson_no",
                element: <LessonPage></LessonPage>,
                loader: () => fetch('/spanish.json'),
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
        ]
    },
    
    {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "*",
        element: <h1>this is error page</h1>
    }
]);

export default router;