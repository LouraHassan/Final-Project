import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ManagerHomePage from '../Pages/ManagerHomePage'
import PositionsPage from "../Pages/PositionsPage";
import App from "../App";
import Home from "../Pages/Home";
import AdminHomePage from "../Pages/AdminHomePage";
import AdminDeptPage from "../Pages/AdminDeptPage";
import AdminPositionPage from "../Pages/AdminPositionPage";
import EmployeePage from "../Pages/EmployeePage";

const Router = createBrowserRouter([


    {
        path: '/',
        element: <Home></Home>
    },
    {

        path: '/admin',
        element: <AdminHomePage></AdminHomePage>
    },
    {
        path: '/admin/department',
        element: <AdminDeptPage></AdminDeptPage>
    },
    {
        path: '/admin/position',
        element: <AdminPositionPage></AdminPositionPage>
    },
    {
      path: '/Login',
      element: <Login/>
},    {
       path: '/Signup',
       element: <Signup/>
},

 {
       path: '/Manager',
       element: <ManagerHomePage/>
},
{
       path: '/Position',
       element: <PositionsPage/>
},
{
       path: '/Employee',
       element: <EmployeePage/>
}



])

export default Router