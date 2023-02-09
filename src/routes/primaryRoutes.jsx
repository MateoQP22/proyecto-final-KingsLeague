import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NosotrosPage from "../pages/NosotrosPage";
import RegisterPage from "../pages/RegisterPage";
import AutoValidation from "./AutoValidation";

export const primaryRoutes = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {
                index: '/',
                element: <AutoValidation/>,
                children:[
                    {
                        index:true,
                        element: <HomePage/>
                    },
                    {
                        path: 'nosotros',
                        element: <NosotrosPage/>
                    }
                ]
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    }
]);