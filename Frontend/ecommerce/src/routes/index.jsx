import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"Signup",
                element:<Signup></Signup>
            },
            {
                path:"ForgetPassword",
                element:<ForgotPassword></ForgotPassword>
            }
        ]
    }
]);

export default router;