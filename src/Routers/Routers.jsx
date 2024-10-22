import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AdminHomePage from "../Pages/AdminHomePage";
import AdminDeptPage from "../Pages/AdminDeptPage";
import AdminPositionPage from "../Pages/AdminPositionPage";
import Signup from "../Pages/Signup";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/admin/:id',
        element: <AdminHomePage></AdminHomePage>
    },
    {
        path: '/admin/department',
        element: <AdminDeptPage></AdminDeptPage>
    },
    {
        path: '/admin/position',
        element: <AdminPositionPage></AdminPositionPage>
    }
])

export default Router