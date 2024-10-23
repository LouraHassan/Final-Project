import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import ManagerHomePage from '../Pages/ManagerHomePage'
import PositionsPage from "../Pages/PositionsPage";
import App from "../App";
import Home from "../Pages/Home";
import AdminHomePage from "../Pages/AdminHomePage";
import AdminDeptPage from "../Pages/AdminDeptPage";
import AdminPositionPage from "../Pages/AdminPositionPage";
import Signup from "../Pages/Signup";
import EmployeePage from "../Pages/EmployeePage";


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
        path: '/admin/position',
        element: <AdminPositionPage></AdminPositionPage>
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
       path: '/Position',
       element: <PositionsPage/>
},
{
       path: '/Employee/:id',
       element: <EmployeePage/>
}



])

export default Router