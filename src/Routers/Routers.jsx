import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import ManagerHomePage from '../Pages/ManagerHomePage'
import PositionsPage from "../Pages/PositionsPage";
import App from "../App";
import Home from "../Pages/Home";
import AdminHomePage from "../Pages/AdminHomePage";
import AdminDeptPage from "../Pages/AdminDeptPage";
import Signup from "../Pages/Signup";
import EmployeePage from "../Pages/EmployeePage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import ErrorPage from "../Pages/ErrorPage";


const Router = createBrowserRouter([


    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>
    },

    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/admin',
        element: <AdminHomePage></AdminHomePage>
    },
    {
        path: '/admin/:id',
        element: <AdminHomePage></AdminHomePage>
    },
    {
        path: '/admin/department/:id',
        element: <AdminDeptPage></AdminDeptPage>
    },
  
    {
      path: '/Login',
      element: <Login/>
},   

 {
       path: '/Manager/:id',
       element: <ManagerHomePage/>
},
{
       path: '/Position/:id',
       element: <PositionsPage/>
},
{
       path: '/Employee/:id',
       element: <EmployeePage/>
},
{
    path: '/Employee',
    element: <EmployeePage/>
},
{
    path: '/changePassword/:token',
    element: <ResetPasswordPage/>
}




])

export default Router