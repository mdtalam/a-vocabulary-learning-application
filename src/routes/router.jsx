import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from "../Component/ForgotPassword";
import Login from "../Component/Login/Login";
import MyProfile from "../Component/MyProfile";
import Register from "../Component/Register/Register";
import AuthLayOut from "../MainLayOut/AuthLayOut";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import LessonPage from "../Pages/LessonPage";
import StartLearning from "../Pages/StartLearning";
import Tutorials from "../Pages/Tutorials";
import PrivetRoute from "./PrivetRoute";



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
                element: (<PrivetRoute>
                    <LessonPage></LessonPage>
                </PrivetRoute>
                ),
                loader: () => fetch('/spanish.json'),
            },
            {
                path: "/tutorials",
                element: (<PrivetRoute>
                    <Tutorials></Tutorials>
                </PrivetRoute>)
            },
            {
                path: "/about-us",
                element: <h1>this is about us page</h1>
            },
            {
                path: "/my-profile",
                element: <PrivetRoute><MyProfile></MyProfile></PrivetRoute>
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
            },
            {
                path: "/auth/forgot-password",
                element: <ForgotPassword></ForgotPassword>
            }
        ]
    },
    {
        path: "*",
        element: <h1>this is error page</h1>
    }
]);

export default router;