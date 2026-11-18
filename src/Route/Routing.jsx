
// import About from "../pages/About";
// import Profile from "../pages/Profile";
// import Login from "../pages/Login";
import { createBrowserRouter,Navigate } from "react-router-dom";
import App from "../App";
import About from "../component/Page/Aboute/Aboute";
import Services from "../component/Page/Servive/Service";
import Donation from "../component/Page/Donetione/Donetion";

export const router = createBrowserRouter([

    // {
    //     path: "/login",
    //     element: <Login />,
    // },
    // {
    //     path: "/forgot-password",
    //     element: <ForgotPassword />,
    // },
    // {
    //     path: "/register",
    //     element: <Register />,
    // },
    // {
    //     path: "/OTPVerify",
    //     element: <OTPVerify />,
    // },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/aboute",
        element: <About />,
    },
    {
        path: "/services",
        element: <Services/>,
    },
    {
        path: "/service",
        element: <Services/>,
    },
    {
        path: "/donation",
        element: <Donation/>,
    },



    {
        path: "*",
        element: <Navigate to="/" replace />,
    },


]);
